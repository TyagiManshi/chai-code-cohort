// Setting up a basic express application

const express = require('express');     // Import Express module
const app = express()                   // Call express() to create an Express app 

// Now we can create routes 
// Basic routes → app.get(), app.post(), app.put(), app.delete().
// GET – Fetches data.
// POST – Sends data to the server.


// Middleware
// This middleware will run first, before the route or url

app.use(function(req, res, next){
    console.log("Middleware chala");
    next(); // It means forward the request
});     

app.use(function(req, res, next){
    console.log("Middleware chala ek aur baar");
    next();
})

app.get('/', function(req, res){
    res.send(`Hello ${req.query.name}`) // Automatic Parsing: Express.js parses query parameters and makes them available in req.query.
})

// my search query for would be like this - http://localhost:3000/profile?name=manshi

app.get("/profile", function(req, res){
    res.send(`Hello, I am ${req.query.name}. I am ${req.query.age} years old.`)
})

// my search query for would be like this - http://localhost:3000/profile?name=manshi&age=20

//Middleware for error handling, always at last 
app.use(function(err, req, res, next){
    console.log(err.stack);
    res.status(500).send("Something broke!")
})

// Listening on port 3000
app.listen(3000)


