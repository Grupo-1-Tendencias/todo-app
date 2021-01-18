import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

function Home() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function getTodos() {
      try {
        const response = await fetch("/api/todo");

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
          <ul className="todos-list" style={{ padding: 0 }}>
            {todos.map((post) => (
              <li
                key={post.id}
                className="todo-item"
                style={{ border: `1px solid black`, display: `flex` }}
              >
                <div>
                  <p className="title">{post.name}</p>
                  <p className="body">{post.description}</p>
                  <p>Date {post.dueDate}</p>
                  {post.isDone && <p>Done</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Layout>
  );
}

export default Home;
