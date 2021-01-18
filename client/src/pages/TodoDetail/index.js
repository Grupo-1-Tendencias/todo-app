import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../components/Layout";

export default function TodoDetail() {
  const [error, setError] = useState(null);
  const [todo, setTodo] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function getTodo() {
      try {
        const response = await fetch(`/api/todo/${id}`);
        if (response.status === 404) {
          throw new Error("Todo with given id not found");
        }
        const data = await response.json();
        setTodo(data);
      } catch (e) {
        setError(e);
      }
    }

    getTodo();
  }, [id]);

  return (
    <Layout>
      {error ? (
        <div>
          <h3>Error found</h3>
          <p>{error.message || <pre>{JSON.stringify(error, null, 2)}</pre>}</p>
        </div>
      ) : !todo ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <h3>{todo.name}</h3>
          <p>{todo.dueDate}</p>
          <p>{`${todo.isDone}`}</p>
          <p>{todo.description}</p>

          <Link to={`/update/${todo.key}`}>
            <button>Update</button>
          </Link>
          <Link to={`/delete/${todo.key}`}>
            <button>Delete</button>
          </Link>
        </div>
      )}
    </Layout>
  );
}
