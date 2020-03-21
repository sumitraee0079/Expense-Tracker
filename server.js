app.post('/',(req, res) => {
  let data = {ExpenseTitle: req.body.title,
    description: req.body.description,
    amount: req.body.amount,
    date: req.body.date};
  let sql = "INSERT INTO user SET ?";
  let query = connection.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});
