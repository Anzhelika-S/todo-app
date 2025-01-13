import { Component } from "react";
import "./Footer.css";
import PropTypes from "prop-types";

import TasksFilter from "./TasksFilter";

export default class Footer extends Component {
  static propTypes = {
    left: PropTypes.number,
    selectTasks: PropTypes.func,
    filter: PropTypes.string,
    onClearCompleted: PropTypes.func,
  };

  static defaultProps = {
    left: 0,
    filter: "all",
  };

  render() {
    const { left, selectTasks, filter, onClearCompleted } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{left} items left</span>
        <TasksFilter
          selectTasks={selectTasks}
          filter={filter}
        />
        <button
          className="clear-completed"
          onClick={onClearCompleted}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}
