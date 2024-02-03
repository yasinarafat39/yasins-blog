const express = require('express'); // import express.js 

const app = express(); // Create an instance of an Express application 

// Define a basic route 
app.get('/', (req, res) => {
    res.send("Hello, Yasin's world!"); // send a response
});

// new route about yasin's blog
app.get('/about', (req, res) => {
    res.send("This is about from Yasin's blog Server inside.");
});


const PORT = 3000;

app.listen(PORT, () => { // listen on port 3000
    console.log(`server is running at the http://localhost:${PORT}`);
});
