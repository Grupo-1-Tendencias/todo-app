import "./styles.css";
import { Link } from "react-router-dom";

function Items({ items: todos = [] }) {
  function Item({ todo }) {
    return (
      <li key={todo.id} className="item">
        <div className={`mark ${todo.isDone ? "on" : "off"}`}></div>
        <Link to={`/detail/${todo.key}`}>
          <div className="name">{todo.name}</div>
        </Link>
        <div className="controls">
          <Link className="icon view" to={`/update/${todo.key}`}></Link>
          <Link className="icon delete" to={`/delete/${todo.key}`}></Link>
        </div>
      </li>
    );
  }

  return (
    <ul className="items">
      {todos.map((todo) => (
        <Item todo={todo} />
      ))}
    </ul>
  );
}

export default Items;
