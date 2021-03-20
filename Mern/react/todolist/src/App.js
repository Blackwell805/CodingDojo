import './App.css';
import React, {useState} from 'react'
import Task from './Components/Task';
import Form from './Components/Form';


function App() {
  const [task, setTask] = useState([]); 
  return (
    <div className="App">
    <Form tasks={tasks} setTasks={setTasks} />
    <Task tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
