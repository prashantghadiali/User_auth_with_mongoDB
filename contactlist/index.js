const express = require("express");
const app = express();
const port = 8000;


app.set("view engine", "ejs");
app.set("views", "frontend");

// middleware
app.use(express.urlencoded()); // it tells the server to pass the data from frontend to req.body object
app.use("/", require("./routes/index"));


app.listen(port, (error) => {
    if(error) {
        console.log("Error while running the server ", error);
        return;
    }
    console.log("Server is up and running on port ", port);
})