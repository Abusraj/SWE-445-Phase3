const express = require('express');
const path = require('path');
const app = express();
const favicon = require('serve-favicon')
const port = process.env.PORT || 8080;
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
let db = new sqlite3.Database('./db/test.db', (err) => {
    app.set('view engine', 'ejs');
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the test database.');
    });


app.get('/', function(req, res, next) {
    res.render(path.join(__dirname, '/index.html'));
    res.setHeader('Content-Type', 'text/plain');
    res.write("Hello KFUPM & SWE-445");
    res.end();
  });

app.get('/login', (req, res, next)=>{
    res.render({firstName: 'David', lastName: 'Smith', age: 33});
});


app.get('/signup', (req, res, next)=>{
    res.render({firstName: 'David', lastName: 'Smith', age: 33});
});

 if(req.url == '/about'){
 }
app.listen(port);
console.log('Server started at http://localhost:' + port);