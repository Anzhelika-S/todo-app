import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

export default function App() {
  const createTask = (value, sec) => {
    return {
      id: uuidv4(),
      value,
      completed: false,
      editing: false,
      sec: sec,
      running: false,
      intervalID: null,
      createdAt: new Date(),
    };
  };

  const [tasks, setTasks] = useState([
    createTask('new task', 300),
    createTask('new task', 600),
    createTask('new task', 60),
  ]);
  const [filter, setFilter] = useState('all');

  const handleKey = (value, sec) => {
    if (!sec) sec = 300;
    const task = createTask(value, sec);

    setTasks((tasks) => {
      const newArr = [...tasks, task];

      return newArr;
    });
  };

  const toggleProperty = (arr, id, propName) => {
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

  const onToggleCompleted = (id) => {
    setTasks((tasks) => {
      return toggleProperty(tasks, id, 'completed');
    });
  };

  const onToggleEditing = (id) => {
    setTasks((tasks) => {
      return toggleProperty(tasks, id, 'editing');
    });
  };

  const deleteTask = (id, event) => {
    event.stopPropagation();

    setTasks((tasks) => {
      const task = tasks.find((el) => el.id === id);

      if (task.intervalID) {
        clearInterval(task.intervalID);
      }

      return tasks.filter((el) => el.id !== id);
    });
  };

  const onClearCompleted = () => {
    const todoList = tasks.filter((el) => !el.completed);

    setTasks(todoList);
  };

  const selectTasks = (status) => {
    setFilter(status);
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case 'active':
        return tasks.filter((el) => !el.completed);
      case 'completed':
        return tasks.filter((el) => el.completed);
      default:
        return tasks;
    }
  };

  const onEdit = (id, value) => {
    let el = tasks.filter((el) => el.id === id);
    const idx = tasks.findIndex((el) => el.id === id);
    el = { ...el[0], value: value, id: id, editing: false };
    const newArr = [...tasks.slice(0, idx), el, ...tasks.slice(idx + 1)];

    setTasks(newArr);
  };

  const handleTimer = (id, value) => {
    const arr = tasks.map((task) => {
      if (task.id !== id) return task;

      if (value === 'pause') {
        if (task.intervalID) {
          clearInterval(task.intervalID);
        }
        return { ...task, running: false, intervalID: null };
      }

      if (value === 'start' && !task.running) {
        if (task.intervalID) return task;

        const intervalID = setInterval(() => {
          setTasks((tasks) => {
            const newTasks = tasks.map((t) => {
              if (t.id !== id) return t;

              if (t.sec === 0 || t.completed) {
                clearInterval(t.intervalID);
                return { ...t, running: false, intervalID: null };
              }

              return { ...t, sec: t.sec - 1 };
            });

            return newTasks;
          });
        }, 1000);

        return { ...task, running: true, intervalID };
      }

      return task;
    });

    setTasks(arr);
  };

  console.log(tasks);

  const todoCount = tasks.filter((el) => !el.completed).length || 0;
  const filteredTasks = getFilteredTasks();

  return (
    <>
      <Header handleKey={handleKey} />
      <TaskList
        tasks={filteredTasks}
        onDeleted={deleteTask}
        onToggleCompleted={onToggleCompleted}
        onToggleEditing={onToggleEditing}
        onEdit={onEdit}
        handleTimer={handleTimer}
      />
      <Footer left={todoCount} onClearCompleted={onClearCompleted} filter={filter} selectTasks={selectTasks} />
    </>
  );
}
