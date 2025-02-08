import './Header.css';
import PropTypes from 'prop-types';

import NewTaskForm from '../NewTaskForm';

export default function Header({ handleKey }) {
  return (
    <header>
      <h1 className="header">todos</h1>
      <NewTaskForm handleKey={handleKey} />
    </header>
  );
}

Header.propTypes = {
  handleKey: PropTypes.func,
};
