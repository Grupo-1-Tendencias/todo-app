import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Layout from "../../components/Layout";

export default function UpdateTodo() {
  const [error, setError] = useState(null);
  const [todo, setTodo] = useState(null);

  const { id } = useParams();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/todo/update/${id}`, {
        method: "PUT",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      if (!response.ok) {
        throw new Error(await response.text());
      }
      const data = await response.json();
      history.push(`/detail/${data.key}`);
    } catch (e) {
      setError(e);
    }
  };

  const handleChange = (name) => {
    return (e) => {
      setTodo((t) => ({
        ...t,
        [name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      }));
    };
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter name"
            onChange={handleChange("name")}
            value={todo.name}
            required
          />
          <input
            type="text"
            placeholder="Enter dueDate"
            onChange={handleChange("dueDate")}
            value={todo.dueDate}
          />
          <input
            type="checkbox"
            placeholder="Enter isDone"
            onChange={handleChange("isDone")}
            checked={todo.isDone}
          />
          <textarea
            type="text"
            placeholder="Enter description"
            onChange={handleChange("description")}
            value={todo.description}
          />
          <button type="submit">Update</button>
        </form>
      )}
    </Layout>
  );
}