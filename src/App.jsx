import React, { useEffect, useState } from 'react'
import Taskform from './Components/Taskform'
import TaskList  from './Components/TaskList';
import ProgressTracker from './Components/ProgressTracker'

export default function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  //To create duplicate array of tasks 
  //Spread operator 
  const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  }
 
  return (
    <div>
      <h2>Aspire</h2>
      <p>Your friendly Task Manager</p>

      <Taskform addTask={addTask} />

      
      <TaskList tasks = {tasks} 
      updateTask = {updateTask}
      deleteTask = {deleteTask} />

      
      <ProgressTracker />
      <button>Clear all Tasks</button>
    </div>
  )
} 