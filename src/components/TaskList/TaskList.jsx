import { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';
import './TaskList.css';

export default class TaskList extends Component {
  static propTypes = {
    onToggleCompleted: PropTypes.func,
    onToggleEditing: PropTypes.func,
    onDeleted: PropTypes.func,
    onEdit: PropTypes.func,
    tasks: PropTypes.array,
  };

  render() {
    const { tasks, onToggleCompleted, onToggleEditing, onDeleted, onEdit, handleTimer } = this.props;

    const elements = tasks.map((item) => {
      return (
        <Task
          key={item.id}
          id={item.id}
          onDeleted={onDeleted}
          value={item.value}
          min={item.min}
          sec={item.sec}
          completed={item.completed}
          editing={item.editing}
          onToggleCompleted={() => onToggleCompleted(item.id)}
          onToggleEditing={() => onToggleEditing(item.id)}
          onEdit={onEdit}
          handleTimer={handleTimer}
          createdAt={item.createdAt}
          intervalID={item.intervalID}
          running={item.running}
        />
      );
    });
    return <ul className="list-group todo-list">{elements}</ul>;
  }
}
