import { Component } from "react";
import Task from "../Task";
import "./TaskList.css";

export default class TaskList extends Component {
  render() {
    const { tasks, onToggleCompleted, onToggleEditing, onDeleted } = this.props;

    const elements = tasks.map((item) => {
      return (
        <Task
          key={item.id}
          id={item.id}
          onDeleted={onDeleted}
          value={item.value}
          completed={item.completed}
          editing={item.editing}
          onToggleCompleted={() => onToggleCompleted(item.id)}
          onToggleEditing={() => onToggleEditing(item.id)}
        />
      );
    });
    return <ul className="list-group todo-list">{elements}</ul>;
  }
}
