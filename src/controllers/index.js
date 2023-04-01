//const  conexion  =require( './db.js')
exports.getAll = (req, res) => {
 req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(`SELECT * FROM employees`, (err, result) => {
      if (err) return res.send(err);

      res.json(result);
    });
  });
 /* let sql = `select * from users`
  conexion.query(sql, (err, rows, fields) => {
      if (err) throw err;
      else {
          res.json(rows)
      }
  })*/
};
/*
exports.getOne = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      `SELECT * FROM employees WHERE id = ?`,
      [req.params.value],
      (err, result) => {
        if (err) return res.send(err);

        res.json(result);
      }
    );
  });
};

exports.create = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(`INSERT INTO employees SET ? `, [req.body], (err, result) => {
      if (err) return res.send(err);

      res.send("Creación exitosa");
    });
  });
};

exports.update = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      `UPDATE employees SET ? WHERE id = ?`,
      [req.body, req.params.value],
      (err, result) => {
        if (err) return res.send(err);

        res.send("Actualización exitosa");
      }
    );
  });
};

exports.deleteItem = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      `DELETE FROM employees WHERE id = ?`,
      [req.params.value],
      (err, result) => {
        if (err) return res.send(err);

        res.send("Eliminación exitosa");
      }
    );
  });
};*/
