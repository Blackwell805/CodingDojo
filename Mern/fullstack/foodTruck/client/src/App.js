import './App.css';
import Dashboard from './views/Dashboard';
import NewTruck from './views/NewTruck';
import EditTruck from './views/EditTruck';
import { Router, Link} from '@reach/router';

function App() {
  return (
    <div className="App">
      <header>
      <h1>Food Trucks</h1>
      <Link to="/">Dashboard</Link> | &nbsp;
      <Link to="/truck/new">New Truck</Link>
      </header>
      <Router>
      <Dashboard path='/' />
      <NewTruck path='/truck/new/' />
      <EditTruck path='/truck/:id/edit' />
      </Router>
    </div>
  );
}

export default App;
