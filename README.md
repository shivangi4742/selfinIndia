# MyAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


#

...................................................................................................................................
if you are building your app then  run  `npm run build`

you have to configure database in db.connection.js

#host: "localhost",
#user: "root",
#password: "password",
#database: "world",

if you want to start the server then run  `node server` it will open 9090 port.

http://localhost:9090/getemployee

here you will get the all the employee list. also you can search the list using search filter.


http://localhost:9090/createemployee

here yopu can create the employee


CREATE TABLE Persons (
    PersonID int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) ,
    FirstName varchar(255),
    City varchar(255),
    Address varchar(255),
    PRIMARY KEY (PersonID)
);

select * from Persons