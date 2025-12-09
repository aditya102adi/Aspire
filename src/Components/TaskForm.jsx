import React, { useState } from 'react'

export default function Taskform({ addTask }) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [category, setCategory] = useState('General');

    const handleSubmit = (e) => {
        //For not refereshing the page
        e.preventDefault();
        addTask({ task: task, priority, category, completed: false })

        //rest
        setTask('');
        setPriority('medium');
        setCategory('general'); 
    }

    return (
        <form onSubmit={handleSubmit} id="task-from">

            <div id='inp'>
                <input type="text" placeholder="Enter the task" value={task}
                    onChange={(e) => setTask(e.target.value)} />
                <span><button type='submit'>Add Task</button></span>
            </div>

            <div className="btns">
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="high"> High </option>
                    <option value="medium"> Medium </option>
                    <option value="low"> Low </option>
                </select>

                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="general">General</option>
                    <option value="personal">Personal</option>
                    <option value="work">Work</option>
                </select>
            </div>
            
        </form>
    )
}
