import { Component } from 'react';
import './NewTaskForm.css';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  static propTypes = {
    handleKey: PropTypes.func,
  };

  state = {
    value: '',
    min: 5,
    sec: 0,
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onMinuteChange = (e) => {
    this.setState({ min: +e.target.value });
  };

  onSecChange = (e) => {
    this.setState({ sec: +e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { value, min, sec } = this.state;

    this.state.value ? this.props.handleKey(value, min, sec) : 0;

    this.setState({
      value: '',
      min: 5,
      sec: 0,
    });
  };

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.onSubmit(e);
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} onKeyDown={this.onKeyDown} className="new-todo-form">
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.handleChange}
          value={this.state.value}
        />
        <input
          className="new-todo new-todo-form__timer"
          placeholder="Min"
          onChange={this.onMinuteChange}
          maxLength={2}
        />
        <input className="new-todo new-todo-form__timer" placeholder="Sec" onChange={this.onSecChange} maxLength={2} />
      </form>
    );
  }
}
