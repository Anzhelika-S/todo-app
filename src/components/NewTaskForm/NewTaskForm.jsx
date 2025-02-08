import { useState } from 'react';
import './NewTaskForm.css';
import PropTypes from 'prop-types';

export default function NewTaskForm({ handleKey }) {
  const [value, setValue] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');
  const [time, setTime] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onMinuteChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const number = Number(value);
      if (number >= 0 && number <= 59) {
        setMin(number);
        setTime(number * 60);
      } else if (value === '') {
        return;
      }
    }
  };

  const onSecChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const number = Number(value);
      if (number >= 0 && number <= 59) {
        setSec(number);
        setTime((min || 0) * 60 + number);
      } else if (value === '') {
        return;
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    value && time >= 0 ? handleKey(value, time) : 0;

    setValue('');
    setSec('');
    setMin('');
    setTime('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={onSubmit} onKeyDown={onKeyDown} className="new-todo-form">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={handleChange}
        value={value}
      />
      <input
        className="new-todo new-todo-form__timer"
        placeholder="Min"
        onInput={onMinuteChange}
        maxLength={2}
        pattern="\d*"
        value={min}
      />
      <input
        className="new-todo new-todo-form__timer"
        placeholder="Sec"
        onInput={onSecChange}
        maxLength={2}
        pattern="\d*"
        value={sec}
      />
    </form>
  );
}

NewTaskForm.propTypes = {
  handleKey: PropTypes.func,
};
