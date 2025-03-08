const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

const users = [
  { id: 1, name: "Rohim", email: "rohim@gmail.com" },
  { id: 2, name: "Alice", email: "alice@yahoo.com" },
  { id: 3, name: "John", email: "john@hotmail.com" },
  { id: 4, name: "Emily", email: "emily@outlook.com" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port);
