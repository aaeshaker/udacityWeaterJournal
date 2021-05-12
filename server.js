// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

//necessary packages
var bodyParser = require('body-parser');
const cors = require('cors');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors()); 

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
const server = app.listen(port, listening);

//callback function to check if the server is running
function listening(){
    console.log("server is running");
}

//GET
app.get('/all', sendInfo);

function sendInfo(req, res){
    res.send(projectData);
    projectData = {};
}

//POST
app.post('/add', addInfo);

function addInfo(request, respond){
    let data = request.body;

    console.log('server side data ', data)
    
    //date
    //temp -> temperature
    // feelings -> user's input
    
    projectData["date"] = data.date;
    projectData["temp"] = data.temp;
    projectData["feel"] = data.feeling;
    
    respond.send(projectData);
}
