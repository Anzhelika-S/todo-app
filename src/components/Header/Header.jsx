import "./Header.css";
import NewTaskForm from "../NewTaskForm";
import { Component } from "react";
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes = {
    handleKey: PropTypes.func,
  };

  render() {
    return (
      <header>
        <h1 className="header">todos</h1>
        <NewTaskForm handleKey={this.props.handleKey} />
      </header>
    );
  }
}
