import { Component } from "react";
import Task from "../Task";
import "./TaskList.css";

export default class TaskList extends Component {
  render() {
    const elements = this.props.tasks.map((item) => {
      return (
        <Task
          edit={item.edit}
          stateNow={item.stateNow}
          key={item.id}
          id={item.id}
          onDeleted={this.props.onDeleted}
        />
      );
    });
    return <ul className="list-group todo-list">{elements}</ul>;
  }
}
