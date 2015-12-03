//Basic Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
//end
//Custom Dependencies
var BuildController= require("./server/lib/controller_template.js");
var BuildControllerJSON= require("./server/lib/controller_template_json.js");
var routesTemplate = require("./server/lib/routes_template.js")
var app = express();
// End

// connect to the database
mongoose.connect('mongodb://localhost/Algorithm_revised');
// End

//Example MODEL
var algorithmSchema = new mongoose.Schema({
  name:'string',
  problem:'string',
  solution_generic:'string',
  solution_time_optimized:'string',
  solution_memory_optimized:'string',
  solution_php:'string',
  solution_python:'string',
  solution_ruby:'string',
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

var algorithms = mongoose.model('Algorithm', algorithmSchema);
/* Load Model */
var Algorithm = mongoose.model('Algorithm');
// Controller

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));
app.listen(8000, function(){});

//CREATE CONTROLLLER and routes (example)
var Algorithms_Controller = new BuildController(Algorithm, "algorithms", ['name', 'problem']);
var  Algorithms_Controller_JSON = new BuildControllerJSON(Algorithm, "algorithms", ['name', 'problem']);

//routes for controller
routesTemplate(app,  Algorithms_Controller, "algorithms");
routesTemplate(app,  Algorithms_Controller_JSON, "algorithms", "json");
//end


//


// End of Routing
