import React, { useState, useEffect } from "react";
//import "./App.css";
import ReadData from "./Read";

function App() {
  const [apiItems, setApiItems] = useState([]);

  useEffect(() => {
    let mounted = true;
    const getData = async () => {
      const response = await fetch("http://localhost:5000/api/todo");
      const { data } = await response.json();

      setApiItems(data);
    };
    getData();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="App">
      <main role="main">
        <header className="App-header" data-testid="header">
          To Do
        </header>
        <ReadData />
      </main>

      {/* <h3>API items</h3>
      <ul>
        {apiItems.map((item) => (
          <li key={item.name} data-testid="api-item">
            {item.name}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
