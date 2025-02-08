import './TasksFilter.css';
import PropTypes from 'prop-types';

export default function TasksFilter({ filter, selectTasks }) {
  let allClass = '';
  let activeClass = '';
  let completedClass = '';

  switch (filter) {
    case 'all':
      allClass += 'selected';
      break;
    case 'active':
      activeClass += 'selected';
      break;
    case 'completed':
      completedClass += 'selected';
  }

  return (
    <ul className="filters">
      <li>
        <button className={allClass} onClick={() => selectTasks('all')}>
          All
        </button>
      </li>
      <li>
        <button className={activeClass} onClick={() => selectTasks('active')}>
          Active
        </button>
      </li>
      <li>
        <button className={completedClass} onClick={() => selectTasks('completed')}>
          Completed
        </button>
      </li>
    </ul>
  );
}

TasksFilter.propTypes = {
  filter: PropTypes.string,
  selectTasks: PropTypes.func,
};
