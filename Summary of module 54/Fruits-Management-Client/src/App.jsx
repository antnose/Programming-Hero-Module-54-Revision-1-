import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/fruits")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);

  const handleAddFruits = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const gmail = form.gmail.value;
    console.log(name, gmail);
    const newFruits = { name, gmail };

    // Send data in backend
    fetch("http://localhost:3001/fruits", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFruits),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newFruit = [...fruits, data];
        setFruits(newFruit);
        form.reset();
      });
  };

  return (
    <>
      <h1>Fruits Management System</h1>
      <form onSubmit={handleAddFruits}>
        <input type="text" name="name" />
        <br />
        <input type="text" name="gmail" />
        <br />
        <input type="submit" value="Add Fruits" />
      </form>
      <div>
        {fruits.map((fruit) => (
          <p key={fruit.id}>
            {fruit.id} : {fruit.name} : {fruit.gmail}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
