import "./Task.css";
import { Component } from "react";
import { formatDistanceToNowStrict } from "date-fns";
export default class Task extends Component {
  createdAt = new Date();

  state = {
    value: this.props.value,
  };

  onTaskChange = (e) => {
    let { value } = e.target;

    this.setState({ value: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onEdit(this.props.id, this.state.value);
  };

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

    const time = formatDistanceToNowStrict(this.createdAt);

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
            <span className="created">created {time} ago</span>
          </label>
          <button
            className="icon icon-edit"
            onClick={onToggleEditing}
          ></button>
          <button
            className="icon icon-destroy"
            onClick={(event) => onDeleted(id, event)}
          ></button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="edit"
            defaultValue={value}
            onChange={this.onTaskChange}
          />
        </form>
      </li>
    );
  }
}
