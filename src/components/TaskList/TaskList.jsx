import { Component } from "react";
import Task from "../Task";
import "./TaskList.css";

export default class TaskList extends Component {
  elements = this.props.tasks.map((item) => {
    return (
      <li className={item.state}>
        <Task edit={item.edit} />
      </li>
    );
  });
  render() {
    return <ul className="list-group todo-list">{this.elements}</ul>;
  }
}
