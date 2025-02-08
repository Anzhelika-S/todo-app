import './Footer.css';
import PropTypes from 'prop-types';

import TasksFilter from './TasksFilter';

export default function Footer({ left, selectTasks, filter, onClearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">{left} items left</span>
      <TasksFilter selectTasks={selectTasks} filter={filter} />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  left: PropTypes.number,
  selectTasks: PropTypes.func,
  filter: PropTypes.string,
  onClearCompleted: PropTypes.func,
};
