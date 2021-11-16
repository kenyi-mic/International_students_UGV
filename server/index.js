import express from "express";

const app = express();
const port = process.env.PORT || 5000;

const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://kenyi:kenyi@123@cluster0.hyr2a.mongodb.net/students?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.use("/", (req, res) => {
  res.send("Welcome to express server!");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
