import "./Task.css";

export default function Task({ edit }) {
  const task = (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
      />
      <label>
        <span className="description">Completed task</span>
        <span className="created">created 17 seconds ago</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>
  );
  return edit ? (
    <>
      {task}
      <input
        type="text"
        className="edit"
        defaultValue="Editing task"
      />
    </>
  ) : (
    <>{task}</>
  );
}
