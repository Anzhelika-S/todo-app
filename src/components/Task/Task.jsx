import './Task.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';

export default function Task({
  value,
  id,
  sec,
  completed,
  editing,
  onToggleCompleted,
  onToggleEditing,
  onEdit,
  onDeleted,
  handleTimer,
  createdAt,
}) {
  const [newValue, setNewValue] = useState(value);

  const onTaskChange = (e) => {
    let { value } = e.target;

    setNewValue(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newValue === '') return;
    onEdit(id, newValue);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    } else if (e.key === 'Escape') {
      setNewValue(newValue);
      onToggleEditing(id);
    }
  };

  const formatSeconds = (time) => {
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

  let classNames = 'task';

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
        <input className="toggle" type="checkbox" checked={completed} onChange={onToggleCompleted} id={`radio-${id}`} />
        <label htmlFor={`radio-${id}`}>
          <span className="description">{value}</span>
          <span className="description description-timer">
            <button className="icon icon-play" onClick={() => handleTimer(id, 'start')}></button>
            <button className="icon icon-pause" onClick={() => handleTimer(id, 'pause')}></button>
            {formatSeconds(sec)}
          </span>
          <span className="created">created {time} ago</span>
        </label>
        <button className="icon icon-edit" onClick={onToggleEditing}></button>
        <button className="icon icon-destroy" onClick={(event) => onDeleted(id, event)}></button>
      </div>
      <form onKeyDown={onKeyDown}>
        <input type="text" value={newValue} className="edit" onChange={onTaskChange} />
      </form>
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onDeleted: PropTypes.func,
  onEdit: PropTypes.func,
  onToggleCompleted: PropTypes.func,
  onToggleEditing: PropTypes.func,
  completed: PropTypes.bool,
  editing: PropTypes.bool,
};
