import "./Header.css";
import NewTaskForm from "../NewTaskForm";

export default function Header() {
  return (
    <header>
      <h1 className="header">todos</h1>
      <NewTaskForm />
    </header>
  );
}
