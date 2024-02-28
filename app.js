const bodyParser = require("body-parser"),
    path = require("path"),
    mongoose = require("mongoose"),
    express = require("express"),
    app = express(),
    session = require("express-session"),
    methodOverride = require("method-override"),
    flash = require("connect-flash");

// mongoose.connect("mongodb://localhost:27017/port_projects", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

app.use(
    express.static(path.join(__dirname, "node_modules"))
);


app.use("/", require("./routes/index"));
// app.use("/projects", require("./routes/projects"));

app.listen(3000, () => {
    console.log("brentpepper.dev is up and running!!");
});