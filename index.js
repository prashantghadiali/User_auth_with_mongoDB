// import the express
const express = require("express");
const port = 8000;
const app = express();

// // home api
// app.get("/", (request, response) => {
//     return response.send("Hello");
// });

// middleware
// it is the operation which are performed after the request is recieved and 
// before responding back to the user
app.use("/", require('./routes/index'));

// app.get('/add', (req, res) => {
//     const a = 10;
//     const b = 20;
//     const sum = a +b;
//     return res.send(`Summation is ${sum}`);
// })

app.get("/test", (req, res) => {
    return res.send("Testing");
})

//start the server
app.listen(port, (error) => {
    if(error){
        console.log(`Issue while running the server at port ${port}`);
        return;
    }
    console.log(`Server is up and running on port ${port}`);
})

