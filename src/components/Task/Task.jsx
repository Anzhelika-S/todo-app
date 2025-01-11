import "./Task.css";
import { Component } from "react";
export default class Task extends Component {
  constructor() {
    super();

    this.state = {
      completed: false,
      editing: false,
    };
  }

  onCompleted = () => {
    this.setState(({ completed }) => {
      return {
        completed: !completed,
      };
    });
  };

  onEditing = () => {
    this.setState(({ editing }) => {
      return {
        editing: !editing,
      };
    });
  };

  render() {
    let classNames = "task";

    const { completed, editing } = this.state;

    if (completed) {
      classNames += " completed";
    }
    if (editing) {
      classNames += " editing";
    }

    return (
      <li
        className={classNames}
        id={this.props.id}
      >
        <div
          className="view"
          onClick={this.onCompleted}
        >
          <input
            className="toggle"
            type="checkbox"
          />
          <label>
            <span className="description">Completed task</span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button
            className="icon icon-edit"
            onClick={this.onEditing}
          ></button>
          <button
            className="icon icon-destroy"
            onClick={() => this.props.onDeleted(this.props.id)}
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
