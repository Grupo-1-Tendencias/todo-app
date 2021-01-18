import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Layout from "../../components/Layout";

export default function DeleteTodo() {
  const [error, setError] = useState(null);
  const [todo, setTodo] = useState(null);

  const { id } = useParams();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await fetch(`/api/todo/delete/${id}`, {
        method: "DELETE",
      });
      history.push("/");
    } catch (error) {
      setError(error);
    }
  };

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
          <h3>Are you sure you want to delete "{todo.name}"?</h3>
          <button onClick={handleClick}>Delete</button>
        </div>
      )}
    </Layout>
  );
}
