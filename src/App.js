import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    setList(data);
  };

  return (
    <div className="App">
      <ui>
        {list.length > 0 &&
          list.map((item) => {
            return (
              <>
                <li>ID: {item.id} </li>
                <li>ID: {item.name} </li>
                <li>ID: {item.email} </li>
                <hr />
              </>
            );
          })}
      </ui>
    </div>
  );
}

export default App;
