import React from 'react'

const Task = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const checkboxHandler = (e) => {
        if (isChecked) {
            setIsChecked(false);
        } else {
            setIsChecked(true);
        }
        return (
    }
    <div>
        {
            props.tasks.map((task, i) => {
                <li key={i}>
                    <input type='checkbox' checked={isChecked} onChange={checkboxHandler}><span>{props.tasks[i]}</span></input>
                    <button type='button' onClick={removeTask}>Delete</button>
                </li>
            })
        }
    </div>
    )
}

export default Task
