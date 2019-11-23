var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config.js');
const Categories = require('./models/category_model');

var app = express();
app.use(bodyParser.raw());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

if (config.seedDB) { require('./components/sqldb/seed'); }

//category list
app.get('/all-categories', (req, res) => {
  Categories.allCategories().then(results => {
    if (results == 0)
      msg = result = "No data found";
    else
      msg = "data found";
    if (results != 0 && results.length > 0) {
      return res.status(200).send({ status: 'success', error_code: 0, error_description: msg,data:results });
    }else
        return res.status(200).send({ status: 'success', error_code: 0, error_description: msg, data: results });
  }).catch(err => {
    return res.send({ status: 'failure', error_code: 1, error_description: err });
  });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
  });
}

// production error handler no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
});

module.exports = app;