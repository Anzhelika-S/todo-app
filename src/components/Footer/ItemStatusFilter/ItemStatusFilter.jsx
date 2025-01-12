import { Component } from "react";
import "./ItemStatusFilter.css";

export default class ItemStatusFilter extends Component {
  render() {
    const classNames = "";
    return (
      <ul className="filters">
        <li>
          <button
            className={classNames}
            onClick={() => this.props.selectTasks("all")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={classNames}
            onClick={() => this.props.selectTasks("active")}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={classNames}
            onClick={() => this.props.selectTasks("completed")}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
