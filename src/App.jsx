import { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

export default class App extends Component {
  maxID = 100;

  state = {
    tasks: [
      { stateNow: "completed", edit: false, id: 1 },
      { stateNow: "editing", edit: true, id: 2 },
      { stateNow: null, edit: false, id: 3 },
    ],
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

  handleKey = ({ key }) => {
    const task = {
      stateNow: "completed",
      edit: false,
      id: this.maxID++,
    };
    if (key === "Enter") {
      this.setState(({ tasks }) => {
        const newArr = [...tasks, task];

        return {
          tasks: newArr,
        };
      });
    }
  };

  render() {
    return (
      <>
        <Header handleKey={this.handleKey} />
        <TaskList
          tasks={this.state.tasks}
          onDeleted={this.deleteTask}
        />
        <Footer />
      </>
    );
  }
}
