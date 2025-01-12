import { Component } from "react";
import "./NewTaskForm.css";

export default class NewTaskForm extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.state.value ? this.props.handleKey(this.state.value) : 0;

    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.handleChange}
          value={this.state.value}
        />
      </form>
    );
  }
}
