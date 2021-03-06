var express = require('express');
var path = require('path')
var bodyParser = require('body-parser');

/***************
 * Setting up express
 ***************/

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//ROUTER
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);


/******************
 * Starting server
 *****************/

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });