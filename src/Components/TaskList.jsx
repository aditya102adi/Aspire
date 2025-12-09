import React from 'react'

export default function TaskList({tasks, updateTask, deleteTask}) {
  return (
    <div>
        <ul>
          {/* map will read the task one by one where index is my unique value*/}
          {/* Fetch the task one by one -- Map is a HOF */}
          {tasks.map((task, index) => {
            <li>
              <div>
                {task.text}
                <small>{task.priority} {task.category}</small>
              </div>

              <div>
                <button>Complete</button>
                <button>Delete</button>
              </div>
            </li>
          })}
        </ul>
    </div>
  )
}
