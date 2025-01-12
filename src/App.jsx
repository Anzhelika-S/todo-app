import { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

export default class App extends Component {
  maxID = 100;

  createTask = (value) => {
    return {
      id: this.maxID++,
      value,
      completed: false,
      editing: false,
    };
  };

  state = {
    tasks: [
      this.createTask("new task"),
      this.createTask("new task"),
      this.createTask("new task"),
    ],
    filter: "all",
  };

  handleKey = (value) => {
    const task = this.createTask(value);

    this.setState(({ tasks }) => {
      const newArr = [...tasks, task];

      return {
        tasks: newArr,
      };
    });
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    if (idx < 0) return;

    const oldTask = arr[idx];
    const newTask = { ...oldTask, [propName]: !oldTask[propName] };

    return [...arr.slice(0, idx), newTask, ...arr.slice(idx + 1)];
  };

  onToggleCompleted = (id) => {
    this.setState(({ tasks }) => {
      return {
        tasks: this.toggleProperty(tasks, id, "completed"),
      };
    });
  };

  onToggleEditing = (id) => {
    this.setState(({ tasks }) => {
      return {
        tasks: this.toggleProperty(tasks, id, "editing"),
      };
    });
  };

  deleteTask = (id, event) => {
    event.stopPropagation();

    this.setState(({ tasks }) => {
      const idx = tasks.findIndex((el) => el.id === id);

      const newArr = [...tasks.slice(0, idx), ...tasks.slice(idx + 1)];

      return {
        tasks: newArr,
      };
    });
  };

  onClearCompleted = () => {
    const todoList = this.state.tasks.filter((el) => !el.completed);

    this.setState({
      tasks: todoList,
    });
  };

  selectTasks = (status) => {
    this.setState({ filter: status });
  };

  getFilteredTasks = () => {
    const { tasks, filter } = this.state;

    switch (filter) {
      case "active":
        return tasks.filter((el) => !el.completed);
      case "completed":
        return tasks.filter((el) => el.completed);
      default:
        return tasks;
    }
  };

  render() {
    const todoCount =
      this.state.tasks?.filter((el) => !el.completed).length || 0;
    const filteredTasks = this.getFilteredTasks();

    return (
      <>
        <Header handleKey={this.handleKey} />
        <TaskList
          tasks={filteredTasks}
          onDeleted={this.deleteTask}
          onToggleCompleted={this.onToggleCompleted}
          onToggleEditing={this.onToggleEditing}
        />
        <Footer
          left={todoCount}
          onClearCompleted={this.onClearCompleted}
          selectTasks={this.selectTasks}
        />
      </>
    );
  }
}
