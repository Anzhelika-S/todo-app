import "./Task.css";
import { Component } from "react";
export default class Task extends Component {
  task = (
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
  render() {
    return this.props.edit ? (
      <>
        {this.task}
        <input
          type="text"
          className="edit"
          defaultValue="Editing task"
        />
      </>
    ) : (
      <>{this.task}</>
    );
  }
}
