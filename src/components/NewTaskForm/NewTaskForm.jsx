import { Component } from 'react';
import './NewTaskForm.css';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  static propTypes = {
    handleKey: PropTypes.func,
  };

  state = {
    value: '',
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onMinuteChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const numericValue = Number(value);
      if (numericValue >= 0 && numericValue <= 59) {
        this.setState({ sec: this.state.sec + value * 60 });
      } else if (value === '') {
        return;
      }
    }
  };

  onSecChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const numericValue = Number(value);
      if (numericValue >= 0 && numericValue <= 59) {
        this.setState({ sec: this.state.sec + value });
      } else if (value === '') {
        this.setState({ sec: '' });
      }
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { value, sec } = this.state;

    this.state.value && sec >= 0 ? this.props.handleKey(value, sec) : 0;

    this.setState({
      value: '',
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
          onInput={this.onMinuteChange}
          maxLength={2}
          pattern="\d*"
        />
        <input
          className="new-todo new-todo-form__timer"
          placeholder="Sec"
          onInput={this.onSecChange}
          maxLength={2}
          pattern="\d*"
        />
      </form>
    );
  }
}
