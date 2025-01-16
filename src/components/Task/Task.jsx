import './Task.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';
export default class Task extends Component {
  createdAt = new Date();

  static propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    onDeleted: PropTypes.func,
    onEdit: PropTypes.func,
    onToggleCompleted: PropTypes.func,
    onToggleEditing: PropTypes.func,
    completed: PropTypes.bool,
    editing: PropTypes.bool,
    checked: PropTypes.bool,
  };

  static defaultProps = {
    value: 'New Task',
    completed: false,
    editing: false,
    checked: false,
  };

  state = {
    value: this.props.value,
  };

  onTaskChange = (e) => {
    let { value } = e.target;

    this.setState({ value: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.value === '') return;
    this.props.onEdit(this.props.id, this.state.value);
  };

  render() {
    let classNames = 'task';

    const { id, value, onDeleted, onToggleCompleted, onToggleEditing, completed, editing, checked } = this.props;

    if (completed) {
      classNames += ' completed';
    }

    if (editing) {
      classNames += ' editing';
    }

    const time = formatDistanceToNowStrict(this.createdAt);

    return (
      <li className={classNames} id={id}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={checked} onChange={onToggleCompleted} id={`radio-${id}`} />
          <label htmlFor={`radio-${id}`}>
            <span className="description">{value}</span>
            <span className="created">created {time} ago</span>
          </label>
          <button className="icon icon-edit" onClick={onToggleEditing}></button>
          <button className="icon icon-destroy" onClick={(event) => onDeleted(id, event)}></button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input type="text" defaultValue={value} className="edit" onChange={this.onTaskChange} />
        </form>
      </li>
    );
  }
}
