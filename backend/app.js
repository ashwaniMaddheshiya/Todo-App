const express = require("express");
const bodyParser = require("body-parser");

const todoRoutes = require("./routes/todo-routes");
const connectToDB = require("./db");

const app = express();
app.use(bodyParser.json());

connectToDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(5000, () => {
  console.log("Connected to the port 5000");
});
