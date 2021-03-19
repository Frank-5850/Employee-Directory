import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const randomUser = await axios.get(
          "https://randomuser.me/api/?results=20"
        );
        console.log(randomUser.data.results);
        setUsers(randomUser.data.results);
      } catch (err) {
        console.log(err);
      }
    })();
    axios.get("/test");
  }, []);

  console.log(users);
  return (
    <div className="App">
      <h1>Hello World!</h1>
      {users.map((user) => (
        <div>
          <p>
            Name: {user.name.first} {user.name.last} Email: {user.email} {""}
            Location: {user.location.country} Username: {user.login.username}{" "}
            Age: {user.dob.age} Gender: {user.gender}
          </p>
          <p>{user.name.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
