import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { apiRoutes } from "../../util/routes";

export default function TodoDetail() {
  const [error, setError] = useState(null);
  const [todo, setTodo] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function getTodo() {
      try {
        const response = await fetch(apiRoutes.getTodo({ id }));
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              className="title"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className={`mark ${todo.isDone ? "on" : "off"}`}></div>
              <div className="name" style={{ marginLeft: "5px" }}>
                {todo.name}
              </div>
            </div>
            <div>
              <div>{todo.dueDate}</div>
            </div>
          </div>
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
