import './Header.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

import NewTaskForm from '../NewTaskForm';

export default class Header extends Component {
  static propTypes = {
    handleKey: PropTypes.func,
  };

  render() {
    return (
      <header>
        <h1 className="header">todos</h1>
        <NewTaskForm handleKey={this.props.handleKey} />
      </header>
    );
  }
}
