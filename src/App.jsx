import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

export default class App extends Component {
  createTask = (value, min, sec) => {
    return {
      id: uuidv4(),
      value,
      completed: false,
      editing: false,
      min: min,
      sec: sec,
      running: false,
      intervalID: null,
      createdAt: new Date(),
    };
  };

  state = {
    tasks: [this.createTask('new task', 5, 0), this.createTask('new task', 5, 0), this.createTask('new task', 5, 0)],
    filter: 'all',
  };

  handleKey = (value, min, sec) => {
    const task = this.createTask(value, min, sec);

    this.setState(({ tasks }) => {
      const newArr = [...tasks, task];

      return {
        tasks: newArr,
      };
    });
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    if (idx < 0) return;

    const oldTask = arr[idx];

    if (propName === 'completed') {
      const newTask = { ...oldTask, completed: !oldTask['completed'], running: false, min: 0, sec: 0 };
      return [...arr.slice(0, idx), newTask, ...arr.slice(idx + 1)];
    }

    if (propName === 'editing') {
      const newTask = { ...oldTask, editing: !oldTask['editing'] };
      return [...arr.slice(0, idx), newTask, ...arr.slice(idx + 1)];
    }
  };

  onToggleCompleted = (id) => {
    this.setState(({ tasks }) => {
      return {
        tasks: this.toggleProperty(tasks, id, 'completed'),
      };
    });
  };

  onToggleEditing = (id) => {
    this.setState(({ tasks }) => {
      return {
        tasks: this.toggleProperty(tasks, id, 'editing'),
      };
    });
  };

  deleteTask = (id, event) => {
    event.stopPropagation();

    this.setState(({ tasks }) => {
      const idx = tasks.findIndex((el) => el.id === id);

      const newArr = [...tasks.slice(0, idx), ...tasks.slice(idx + 1)];

      return {
        tasks: newArr,
      };
    });
  };

  onClearCompleted = () => {
    const todoList = this.state.tasks.filter((el) => !el.completed);

    this.setState({
      tasks: todoList,
    });
  };

  selectTasks = (status) => {
    this.setState({ filter: status });
  };

  getFilteredTasks = () => {
    const { tasks, filter } = this.state;

    switch (filter) {
      case 'active':
        return tasks.filter((el) => !el.completed);
      case 'completed':
        return tasks.filter((el) => el.completed);
      default:
        return tasks;
    }
  };

  onEdit = (id, value) => {
    const { tasks } = this.state;
    let el = tasks.filter((el) => el.id === id);
    const idx = tasks.findIndex((el) => el.id === id);
    el = { ...el[0], value: value, id: id, editing: false };
    const newArr = [...tasks.slice(0, idx), el, ...tasks.slice(idx + 1)];

    this.setState({
      tasks: newArr,
    });
  };

  handleTimer = (id, value) => {
    this.setState(({ tasks }) => {
      const newArr = tasks.map((task) => {
        if (task.id !== id) return task;

        if (value === 'pause') {
          clearInterval(task.intervalID);
          return { ...task, running: false, intervalID: null };
        }

        if (value === 'start' && !task.running) {
          const intervalID = setInterval(() => {
            this.setState(({ tasks }) => {
              const newTasks = tasks.map((t) => {
                if (t.id !== id) return t;

                if (t.min === 0 && t.sec === 0) {
                  clearInterval(t.intervalID);
                  return { ...t, running: false, intervalID: null };
                }

                if (t.sec === 0) {
                  return { ...t, min: t.min - 1, sec: 59 };
                }

                if (t.completed) {
                  clearInterval(t.intervalID);
                  return { ...t, intervalID: null };
                }

                return { ...t, sec: t.sec - 1 };
              });

              return { tasks: newTasks };
            });
          }, 1000);

          return { ...task, running: true, intervalID };
        }

        return task;
      });
      return { tasks: newArr };
    });
  };

  render() {
    const todoCount = this.state.tasks?.filter((el) => !el.completed).length || 0;
    const filteredTasks = this.getFilteredTasks();

    return (
      <>
        <Header handleKey={this.handleKey} />
        <TaskList
          tasks={filteredTasks}
          onDeleted={this.deleteTask}
          onToggleCompleted={this.onToggleCompleted}
          onToggleEditing={this.onToggleEditing}
          onEdit={this.onEdit}
          handleTimer={this.handleTimer}
        />
        <Footer
          left={todoCount}
          onClearCompleted={this.onClearCompleted}
          filter={this.state.filter}
          selectTasks={this.selectTasks}
        />
      </>
    );
  }
}
