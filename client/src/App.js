import React, { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    (async () => {
      try {
        axios.get("/test");
        console.log("success");
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
