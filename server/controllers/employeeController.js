const employeecontroller = {};

employeecontroller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM persons', (err, Persons) => {
      if (err) {
        res.json(err);
      }
      res.send(Persons);
    });
  });
};

employeecontroller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    connection.query('INSERT INTO Persons set ?', data, (err, customer) => {
      if (err) {
        res.json(err);
      } else {
        res.send('true')
      }
    })
  })
};

employeecontroller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM Persons WHERE PersonID = ?", [id], (err, data) => {
      if (err) {
        res.json(err);
      } else {
        res.send(data[0])
      }
    });
  });
};

employeecontroller.update = (req, res) => {

  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
    conn.query('UPDATE Persons set ? where PersonID = ?', [newCustomer, id], (err, rows) => {
      if (err) {
        res.send(false);
      } else {
        res.send(true);
      }
    });
  });
};

employeecontroller.delete = (req, res) => {
  const  id  = req.body.id;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM Persons WHERE PersonID = ?', [id], (err, rows) => {
      if (err) {
        res.send(false)
      } else {
        res.send(true)
      }
    });
  });
}

module.exports = employeecontroller;