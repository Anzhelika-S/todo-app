import Task from "../Task";
import "./TaskList.css";

export default function TaskList() {
  return (
    <ul className="list-group todo-list">
      <Task />
    </ul>
  );
}
