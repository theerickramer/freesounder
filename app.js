var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/search', (req, res) => {
  console.log(req.query.q)
})

app.listen(process.env.PORT || 8080);
