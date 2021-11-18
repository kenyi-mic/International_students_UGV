import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoute from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://kenyi:kenyi@123@cluster0.hyr2a.mongodb.net/students?retryWrites=true&w=majority";
const port = process.env.PORT || 3001;

app.use("/post", postRoute);

app.use("/", (req, res) => {
  res.send("Welcome to express server!");
});

//database connection
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error.message));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
