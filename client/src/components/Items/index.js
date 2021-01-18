import "./styles.css";
import { Link } from "react-router-dom";

function Items({ items: todos = [] }) {
  todos = [
    {
      description: "Do all exercises in page 98",
      dueDate: "31-03-2021",
      isDone: false,
      name: "Math Homework",
      key: "-MRBI_Ad4mDVvuDt3dQP",
    },
    {
      description: "Do all exercises in page 98",
      dueDate: "31-03-2021",
      isDone: false,
      name: "Math Homework",
      key: "-MRBI_Ad4mDVvuDt3dQP",
    },
    {
      description: "Do all exercises in page 98",
      dueDate: "31-03-2021",
      isDone: false,
      name: "Math Homework",
      key: "-MRBI_Ad4mDVvuDt3dQP",
    },
    {
      description: "Do all exercises in page 98",
      dueDate: "31-03-2021",
      isDone: false,
      name: "Math Homework",
      key: "-MRBI_Ad4mDVvuDt3dQP",
    },
    {
      description: "Do all exercises in page 98",
      dueDate: "31-03-2021",
      isDone: false,
      name: "Math Homework",
      key: "-MRBI_Ad4mDVvuDt3dQP",
    },
    {
      description: "Do all exercises in page 98",
      dueDate: "31-03-2021",
      isDone: false,
      name: "Example",
      key: "-MRBJR7mrQfEdohjPL-r",
    },
    {
      description: "fernando",
      dueDate: "",
      isDone: false,
      key: "-MRBcPvhNIP9VvWxUT4g",
      name: "this is a test name",
    },
    {
      description: "fernando",
      dueDate: "",
      isDone: false,
      name: "fdo todo",
      key: "-MRBcrIPgykTiWplSph8",
    },
    {
      description: "fernando",
      dueDate: "",
      isDone: false,
      name: "fdo todo",
      key: "-MRBdIE8VDfkedFkXNlI",
    },
    {
      description: "fernando",
      dueDate: "",
      isDone: false,
      name: "fdo todo",
      key: "-MRBdLR9xT6MWxhCSVwg",
    },
  ];

  function Item({ todo }) {
    return (
      <div key={todo.key} className="item">
        <div className={`mark ${todo.isDone ? "on" : "off"}`}></div>
        <Link to={`/detail/${todo.key}`}>
          <div className="name">{todo.name}</div>
        </Link>
        <div className="controls">
          <Link className="icon view" to={`/update/${todo.key}`}></Link>
          <Link className="icon delete" to={`/delete/${todo.key}`}></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="items">
      {todos.map((todo) => (
        <Item todo={todo} />
      ))}
    </div>
  );
}

export default Items;
