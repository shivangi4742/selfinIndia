var express = require('express');
var busboy = require('connect-busboy');
var bodyParser = require('body-parser');
var compression = require('compression');
var session = require('express-session');
var cookieParser = require('cookie-parser');

const customerRoutes = require('./server/routes/employeeRouter');
var con = require('./server/utils/db.connection');

// Initializations.
var env = 'prod';
var app = new express();

app.use(con)
// Communication settings.
app.use(compression({
	threshold: 0
}));

app.use(cookieParser());
app.use(bodyParser.json({
	limit: '50mb'
}));

app.use(bodyParser.urlencoded({
	limit: '50mb',
	extended: true
}));

app.use(bodyParser.text());

app.use(busboy());
app.use('/employee/', customerRoutes);

// Persistent login sessions.
app.use(session({
	secret: 'msgs.secret',
	resave: false,
	saveUninitialized: false,
	cookie: { secure: false }
}));

// Routing settings.
app.get('/', function (req, res) {
	res.sendFile('./dist/index.html', { root: __dirname });
});
app.use('', express.static(__dirname + '/dist'));
app.get('/*', function (req, res) {
	res.sendFile('./dist/index.html', { root: __dirname });
});
app.use(function (err, req, res, next) {
	console.log(err.stack);
});

function start(app, options) {
	if (options) {
		console.log('starting https');
		return require('https').createServer(options, app);
	}
	console.log('starting http');
	return require('http').createServer(app);
}

const svr = start(app, null).listen(9090);