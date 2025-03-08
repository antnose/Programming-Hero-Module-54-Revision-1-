const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;

// Here have all using middleware
app.use(express.json());
app.use(cors());

// Static Data
const fruits = [
  { id: 1, name: "Mango", gmail: "mango@gmail.com" },
  { id: 2, name: "Apple", gmail: "apple@yahoo.com" },
  { id: 3, name: "Banana", gmail: "banana@hotmail.com" },
  { id: 4, name: "Grapes", gmail: "grapes@outlook.com" },
];

app.get("/", (req, res) => {
  res.send("Hello Welcome to Fruits management system");
});

app.get("/fruits", (req, res) => {
  res.send(fruits);
});

app.post("/fruits", (req, res) => {
  console.log("Api is hitting");
  console.log(req.body);
  const newFruit = req.body;
  newFruit.id = fruits.length + 1;
  fruits.push(newFruit);
  res.send(newFruit);
});

app.listen(port);
