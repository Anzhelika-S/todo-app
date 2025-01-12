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
  };

  handleKey = (value, key) => {
    const task = this.createTask(value);

    if (key === "Enter") {
      this.setState(({ tasks }) => {
        const newArr = [...tasks, task];

        return {
          tasks: newArr,
        };
      });
    }
  };

  onToggleCompleted = (id) => {
    this.setState(({ tasks }) => {
      const idx = tasks.findIndex((el) => el.id === id);
      if (idx < 0) return;

      const oldTask = tasks[idx];
      const newTask = { ...oldTask, completed: !oldTask.completed };

      const newArr = [...tasks.slice(0, idx), newTask, ...tasks.slice(idx + 1)];

      return {
        tasks: newArr,
      };
    });
  };

  onToggleEditing = (id) => {
    this.setState(({ tasks }) => {
      const idx = tasks.findIndex((el) => el.id === id);
      if (idx < 0) return;

      const oldTask = tasks[idx];
      const newTask = { ...oldTask, editing: !oldTask.editing };

      const newArr = [...tasks.slice(0, idx), newTask, ...tasks.slice(idx + 1)];

      return {
        tasks: newArr,
      };
    });
  };

  deleteTask = (id) => {
    this.setState(({ tasks }) => {
      const idx = tasks.findIndex((el) => el.id === id);

      const newArr = [...tasks.slice(0, idx), ...tasks.slice(idx + 1)];

      return {
        tasks: newArr,
      };
    });
  };

  render() {
    return (
      <>
        <Header handleKey={this.handleKey} />
        <TaskList
          tasks={this.state.tasks}
          onDeleted={this.deleteTask}
          onToggleCompleted={this.onToggleCompleted}
          onToggleEditing={this.onToggleEditing}
        />
        <Footer />
      </>
    );
  }
}
