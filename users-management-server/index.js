const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Rohim", email: "rohim@gmail.com" },
  { id: 2, name: "Sarah", email: "sarah@example.com" },
  { id: 3, name: "John", email: "john.doe@example.com" },
  { id: 4, name: "Alice", email: "alice123@email.com" },
  { id: 5, name: "Michael", email: "michael.89@mail.com" },
  { id: 6, name: "Sophia", email: "sophia.smith@domain.com" },
  { id: 7, name: "David", email: "david.richardson@outlook.com" },
];

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log(`Post API Hitting`);
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port);
