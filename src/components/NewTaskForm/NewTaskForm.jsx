import { Component } from 'react';
import './NewTaskForm.css';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  static propTypes = {
    handleKey: PropTypes.func,
  };

  state = {
    value: '',
    min: '',
    sec: '',
    time: '',
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onMinuteChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const number = Number(value);
      if (number >= 0 && number <= 59) {
        this.setState({ min: number, time: number * 60 });
      } else if (value === '') {
        return;
      }
    }
  };

  onSecChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const number = Number(value);
      if (number >= 0 && number <= 59) {
        this.setState((state) => ({
          time: (state.min || 0) * 60 + number,
          sec: number,
        }));
      } else if (value === '') {
        return;
      }
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { time, value } = this.state;

    value && time >= 0 ? this.props.handleKey(value, time) : 0;

    this.setState({
      value: '',
      min: '',
      sec: '',
      time: '',
    });
  };

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.onSubmit(e);
    }
  };

  render() {
    const { sec, min, value } = this.state;
    return (
      <form onSubmit={this.onSubmit} onKeyDown={this.onKeyDown} className="new-todo-form">
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.handleChange}
          value={value}
        />
        <input
          className="new-todo new-todo-form__timer"
          placeholder="Min"
          onInput={this.onMinuteChange}
          maxLength={2}
          pattern="\d*"
          value={min}
        />
        <input
          className="new-todo new-todo-form__timer"
          placeholder="Sec"
          onInput={this.onSecChange}
          maxLength={2}
          pattern="\d*"
          value={sec}
        />
      </form>
    );
  }
}
