import { Router } from '@reach/router';
import {useState} from 'react';
import './App.css';
import Search from './Components/Search';
import People from './Components/People';
import Planets from './Components/Planets';


function App() {
  const [category, setCategory] = useState('')
  const [id, setID] = useState('')
  // const [people, setPeople] = useState('')
  // const [planet, setPlanet] = useState('')

  return (
    
    <div className="App">
      <header>
        May the Force be with you!
      <Search path=' '/>
      </header>
      
      <Router>
        <People path='/people/:id' people={people} setPeople={setPeople}/>
        <Planets path='/planet/:id' planet={planet} setPlanet={setPlanet}/>
      </Router>
      
    </div>
  );
}

export default App;
