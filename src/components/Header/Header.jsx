import "./Header.css";
import NewTaskForm from "../NewTaskForm";
import { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="header">todos</h1>
        <NewTaskForm />
      </header>
    );
  }
}
