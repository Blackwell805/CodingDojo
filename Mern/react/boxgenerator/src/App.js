import './App.css';
import BoxForm from './Components/BoxForm'
import Boxes from './Components/Boxes'
import {useState} from 'react'

function App() {
  const [allColors, setAllColors] = useState([]);
  return (
    <div className="App">
      <BoxForm allColors={allColors} setAllColors={setAllColors}/>
      <Boxes allColors={allColors}/>
    </div>
  );
}

export default App;
