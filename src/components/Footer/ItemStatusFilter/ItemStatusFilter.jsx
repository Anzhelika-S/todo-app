import { Component } from "react";
import "./ItemStatusFilter.css";

export default class ItemStatusFilter extends Component {
  render() {
    let allClass = "";
    let activeClass = "";
    let completedClass = "";

    const { filter } = this.props;

    switch (filter) {
      case "all":
        allClass += "selected";
        break;
      case "active":
        activeClass += "selected";
        break;
      case "completed":
        completedClass += "selected";
    }

    return (
      <ul className="filters">
        <li>
          <button
            className={allClass}
            onClick={() => this.props.selectTasks("all")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={activeClass}
            onClick={() => this.props.selectTasks("active")}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={completedClass}
            onClick={() => this.props.selectTasks("completed")}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
