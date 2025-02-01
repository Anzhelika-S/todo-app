import './Task.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';
export default class Task extends Component {
  static propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    onDeleted: PropTypes.func,
    onEdit: PropTypes.func,
    onToggleCompleted: PropTypes.func,
    onToggleEditing: PropTypes.func,
    completed: PropTypes.bool,
    editing: PropTypes.bool,
  };

  static defaultProps = {
    value: 'New Task',
    completed: false,
    editing: false,
  };

  state = {
    value: this.props.value,
    newValue: this.props.value,
  };

  onTaskChange = (e) => {
    let { value } = e.target;

    this.setState({ newValue: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.newValue === '') return;
    this.props.onEdit(this.props.id, this.state.newValue);
  };

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.onSubmit(e);
    } else if (e.key === 'Escape') {
      const { value } = this.state;
      this.setState({ value: value, newValue: value });
      this.props.onToggleEditing(this.props.id);
    }
  };

  formatSeconds = (time) => {
    let min;
    let sec;

    if (time === 0) {
      min = 0;
      sec = 0;
    } else {
      min = Math.floor(time / 60);
      sec = time % 60;
    }

    return (
      <span>
        {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
      </span>
    );
  };

  render() {
    let classNames = 'task';

    const {
      id,
      value,
      sec,
      onDeleted,
      onToggleCompleted,
      onToggleEditing,
      completed,
      editing,
      handleTimer,
      createdAt,
    } = this.props;

    if (completed) {
      classNames += ' completed';
    }

    if (editing) {
      classNames += ' editing';
    }

    const time = formatDistanceToNowStrict(createdAt);

    return (
      <li className={classNames} id={id}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={onToggleCompleted}
            id={`radio-${id}`}
          />
          <label htmlFor={`radio-${id}`}>
            <span className="description">{value}</span>
            <span className="description description-timer">
              <button className="icon icon-play" onClick={() => handleTimer(id, 'start')}></button>
              <button className="icon icon-pause" onClick={() => handleTimer(id, 'pause')}></button>
              {this.formatSeconds(sec)}
            </span>
            <span className="created">created {time} ago</span>
          </label>
          <button className="icon icon-edit" onClick={onToggleEditing}></button>
          <button className="icon icon-destroy" onClick={(event) => onDeleted(id, event)}></button>
        </div>
        <form onKeyDown={this.onKeyDown}>
          <input type="text" value={this.state.newValue} className="edit" onChange={this.onTaskChange} />
        </form>
      </li>
    );
  }
}
