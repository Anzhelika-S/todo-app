import "./Footer.css";
import ItemStatusFilter from "./ItemStatusFilter/ItemStatusFilter";

export default function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <ItemStatusFilter />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}
