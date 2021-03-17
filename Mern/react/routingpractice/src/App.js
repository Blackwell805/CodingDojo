import './App.css';
import { Router } from '@reach/router';
import Home from './Components/Home'
import NumberOrWord from './Components/NumberOrWord'
import HelloColor from './Components/HelloColor'


function App() {


  return (
    <div className="App">
        <Router>
          <Home path='/home' />
          <NumberOrWord path='/:param' />
          <HelloColor path='/:word/:color1/:color2' />
        </Router>
    </div>
  );
}

export default App;
