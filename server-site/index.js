
require("dotenv").config(); // environment variable

// required packages 
const express = require('express'); // import express.js 
const mongoose = require("mongoose");


// initialize express
const app = express(); // Create an instance of an Express application 


// mongodb connect
mongoose.connect(
    process.env.MONGODB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => {
        console.log("Mongodb is connected");
    })
    .catch((err) => {
        console.log(err);
    });




// Define a basic route 
app.get('/', (req, res) => {
    res.send("Hello, Yasin's world!"); // send a response
});


const PORT = 3000;

app.listen(PORT, () => { // listen on port 3000
    console.log(`server is running at the http://localhost:${PORT}`);
});
