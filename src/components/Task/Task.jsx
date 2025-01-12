import "./Task.css";
import { Component } from "react";
export default class Task extends Component {
  render() {
    let classNames = "task";

    const {
      id,
      value,
      onDeleted,
      onToggleCompleted,
      onToggleEditing,
      completed,
      editing,
    } = this.props;

    if (completed) {
      classNames += " completed";
    }
    if (editing) {
      classNames += " editing";
    }

    return (
      <li
        className={classNames}
        id={id}
      >
        <div
          className="view"
          onClick={onToggleCompleted}
        >
          <input
            className="toggle"
            type="checkbox"
          />
          <label>
            <span className="description">{value}</span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button
            className="icon icon-edit"
            onClick={onToggleEditing}
          ></button>
          <button
            className="icon icon-destroy"
            onClick={() => onDeleted(id)}
          ></button>
        </div>
        <input
          type="text"
          className="edit"
          defaultValue="Editing task"
        />
      </li>
    );
  }
}
