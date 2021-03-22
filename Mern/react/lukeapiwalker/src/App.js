import { Router } from '@reach/router';
import React  from 'react';
import './App.css';
import Search from './Components/Search';
import People from './Components/People';
import Planets from './Components/Planets';


function App() { //I COULD store the State that I would use overall here in app.js BUT I'm not using state here. 



  return (
    
    <div className="App">
      <Search />
      <Router>
        <People path='/people/:id' />
        <Planets path='/planets/:id'/> 
      </Router>
    </div>
  );
}

export default App;
