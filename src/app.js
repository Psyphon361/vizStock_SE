require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const mainRouter = require("./routers/main");

app.use(express.json()); // for parsing application/json

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const port = process.env.PORT;

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");

// Setup ejs engine
app.set("view engine", "ejs");
app.set("views", viewsPath);

// Setup static directory to serve`
app.use(express.static(publicDirectoryPath));

app.use(mainRouter);

app.get("/*", (req, res) => {
    res.render("404");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
