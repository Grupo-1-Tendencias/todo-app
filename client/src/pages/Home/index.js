import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { apiRoutes } from "../../util/routes";
import "./../../components/Items/styles.css";
import Search from "./../../components/Search";

function Home() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function getTodos() {
      try {
        const response = await fetch(apiRoutes.getTodos());

        const data = await response.json();
        setTodos(data.slice(0, 50));
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoaded(true);
      }
    }
    getTodos();
  }, []);

  return (
    <Layout>
      {error ? (
        <div>Error in loading</div>
      ) : !isLoaded ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Search />
          <ul className="items" style={{ padding: 0 }}>
            {todos.map((todo, idx) => (
              <li
                key={`${idx}-${todo.id}`}
                className="item"
                // style={{ border: `1px solid black`, display: `flex` }}
              >
                <div className={`mark ${todo.isDone ? "on" : "off"}`}></div>
                <Link to={`/detail/${todo.key}`}>
                  <div className="name">{todo.name}</div>
                </Link>
                <div className="controls">
                  <Link className="icon view" to={`/update/${todo.key}`}></Link>
                  <Link
                    className="icon delete"
                    to={`/delete/${todo.key}`}
                  ></Link>
                </div>
                {/* <Link to={`/detail/${todo.key}`}>
                  <p className="title">{todo.name}</p>
                  <p className="body">{todo.description}</p>
                  <p>Date {todo.dueDate}</p>
                  {todo.isDone && <p>Done</p>}
                </Link> */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Layout>
  );
}

export default Home;
