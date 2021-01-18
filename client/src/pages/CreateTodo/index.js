import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout";
import { apiRoutes } from "../../util/routes";

export default function CreateTodo() {
  const [newTodo, setNewTodo] = useState({
    name: "",
    description: "",
    dueDate: "",
  });
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleChange = (name) => {
    return (e) => {
      setNewTodo({ ...newTodo, [name]: e.target.value });
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await fetch(apiRoutes.createTodo(), {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      if (response.ok) {
        history.push("/");
      } else {
        throw new Error("Error creating the todo");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter title"
          onChange={handleChange("name")}
          required
        />
        <input
          placeholder="Enter due date"
          onChange={handleChange("dueDate")}
        />
        <textarea
          placeholder="Enter description"
          onChange={handleChange("description")}
        />
        <button type="submit">{loading ? "Loading..." : "Create"}</button>
      </form>
    </Layout>
  );
}
