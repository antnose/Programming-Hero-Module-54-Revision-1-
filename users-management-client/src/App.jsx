import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <>
      <h1>Users Management Client</h1>
      {users.length}
    </>
  );
}

export default App;
