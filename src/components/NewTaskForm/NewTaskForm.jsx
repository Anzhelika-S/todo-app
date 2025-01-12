import { Component } from "react";
import "./NewTaskForm.css";

export default class NewTaskForm extends Component {
  newValue = "";

  handleChange = (e) => {
    const { value } = e.target;
    this.newValue = value;

    this.props.handleKey(value, e.key);
  };
  render() {
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyUp={this.handleChange}
        defaultValue={this.newValue}
      />
    );
  }
}
