import React, { useState } from 'react'

const Form = (props) => {
    const [task, setTask] = useState('')
    const addTask = (e) => {
        e.preventDefault();
        props.setTasks([...props.tasks, task]);
        setTask('');
    }
    return (
        <div>
            <form onSubmit={addTask}>
                <input type="text" name='task' value={task} onChange={(e) => setTask(e.target.value)} />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default Form
