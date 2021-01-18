import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import Search from "../../components/Search";
import Items from "../../components/Items";

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
    <Layout
      children={
        error ? (
          <div>Error in loading</div>
        ) : !isLoaded ? (
          <div>Loading...</div>
        ) : (
          [<Search />, <Items items={todos} />]
        )
      }
    ></Layout>
  );

  // return (
  //   <Layout>
  //     {error ? (
  //       <div>Error in loading</div>
  //     ) : !isLoaded ? (
  //       <div>Loading...</div>
  //     ) : (
  //       <div>
  //         <ul className="todos-list" style={{ padding: 0 }}>
  //           {todos.map((todo) => (
  //             <li
  //               key={todo.id}
  //               className="todo-item"
  //               style={{ border: `1px solid black`, display: `flex` }}
  //             >
  //               <Link to={`/detail/${todo.key}`}>
  //                 <p className="title">{todo.name}</p>
  //                 <p className="body">{todo.description}</p>
  //                 <p>Date {todo.dueDate}</p>
  //                 {todo.isDone && <p>Done</p>}
  //               </Link>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     )}
  //   </Layout>
  // );
}

export default Home;
