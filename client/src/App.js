import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    let filterUsers = filteredArray.filter((user) => {
      let firstName = user.name.first;
      let lastName = user.name.last;
      return (
        firstName.includes(e.target.value) || lastName.includes(e.target.value)
      );
    });
    console.log(filteredArray);
    setUsers(filterUsers);
  };

  let filteredArray;

  const submitButton = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    (async () => {
      try {
        const randomUser = await axios.get(
          "https://randomuser.me/api/?nat=us,dk,fr,gb,ca,nz&results=50 "
        );
        filteredArray = randomUser.data.results;
        console.log(filteredArray);
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
      <Header />
      {/* <form>
        <input onChange={onChange} type="text" name="userSearch" />{" "}
        <button onClick={submitButton}>Search</button>
      </form> */}
      <div className="container">
        <div className="row mt-3 ">
          <div className="col-md-1 border border-dark text-center ">
            Picture
          </div>
          <div className="col-md-2 border border-dark text-center">Name</div>
          <div className="col-md-3 border border-dark text-center">Email</div>
          <div className="col-md-2 border border-dark text-center">
            Location
          </div>
          <div className="col-md-2 border border-dark text-center">
            Username
          </div>
          <div className="col-md-1 border border-dark text-center">Gender</div>
          <div className="col-md-1 border border-dark text-center">Age</div>
        </div>
        {users.map((user, index) => (
          <div className="row">
            <div
              className="col-md-1 border border-dark text-center center-text"
              key={index}
            >
              <img src={user.picture.medium} />
            </div>
            <div className="col-md-2 border border-dark text-center">
              <h5>
                {user.name.first} {user.name.last}
              </h5>
            </div>
            <div className="col-md-3 border border-dark text-center">
              <p>{user.email}</p>
            </div>
            <div className="col-md-2 border border-dark text-center">
              <p>{user.location.country}</p>
            </div>
            <div className="col-md-2 border border-dark text-center">
              <p>{user.login.username}</p>
            </div>
            <div className="col-md-1 border border-dark text-center">
              <p>{user.gender}</p>
            </div>
            <div className="col-md-1 border border-dark text-center">
              <p>{user.dob.age}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
