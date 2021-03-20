import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    let filterUsers = users.filter((user) => {
      let firstName = user.name.first;
      let lastName = user.name.last;
      return (
        firstName.includes(e.target.value) || lastName.includes(e.target.value)
      );
    });
    console.log(filterUsers);
    setUsers(filterUsers);
  };

  const submitButton = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    (async () => {
      try {
        const randomUser = await axios.get(
          "https://randomuser.me/api/?nat=us,dk,fr,gb,ca,nz&results=3 "
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
      <form>
        <input onChange={onChange} type="text" name="userSearch" />{" "}
        <button onClick={submitButton}>Search</button>
      </form>

      {users.map((user, index) => (
        <div key={index}>
          <img src={user.picture.large} />
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
