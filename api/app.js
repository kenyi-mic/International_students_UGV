var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var mongo = require("mongodb");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var newAPI = require("./routes/newAPI");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

//database setup(mongodb)
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/students";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("Database created successfully");
  db.close();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", newAPI);

//Have nde serve the files for our built react application
app.use(express.static(path.join(__dirname, "../client/build")));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  //All other GET requests not handled before will return
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
