import React, { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    (async () => {
      try {
        const randomUser = await axios.get(
          "https://randomuser.me/api/?results=50"
        );
        console.log(randomUser.data.results);
      } catch (err) {
        console.log(err);
      }
    })();

    axios.get("/test");
  }, []);

  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
