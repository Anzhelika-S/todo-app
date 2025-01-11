import { useState, Component } from "react";
import "./App.css";

import Header from "./components/Header";
import TaskList from "./components/TaskList/TaskList";
import Footer from "./components/Footer/Footer";

export default class App extends Component {
  tasks = [
    { state: "completed", edit: false },
    { state: "editing", edit: true },
    { state: null, edit: false },
  ];
  render() {
    return (
      <>
        <Header />
        <TaskList tasks={this.tasks} />
        <Footer />
      </>
    );
  }
}
