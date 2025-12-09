import { useEffect, useState } from 'react';

import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import ProgressTracker from './Components/ProgressTracker';



export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (e) {
        setTasks([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return (
    <div className='App'>
      <header>
        <h1 className='title'>Aspire</h1>
        <p className='tagline'>Your friendly Task Manager</p>
      </header>

      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <ProgressTracker tasks={tasks}/>

      {tasks.length > 0 && (
        <button onClick={clearTasks} className='clear-btn'>Clear all Task</button>
      )}
    </div>
  );
}
