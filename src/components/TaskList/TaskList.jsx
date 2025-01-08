import Task from "../Task";
import "./TaskList.css";

export default function TaskList({ tasks }) {
  const elements = tasks.map((item) => {
    return (
      <li className={item.state}>
        <Task />
      </li>
    );
  });
  return <ul className="list-group todo-list">{elements}</ul>;
}
