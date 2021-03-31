import './App.css';
import { Router, Link } from '@reach/router';
import Dashboard from './views/Dashboard';
import NewTruck from './views/NewTruck';
import EditTruck from './views/EditTruck';
import OneTruck from './views/OneTruck';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Food Trucks</h1>
        <Link to="/">Dashboard</Link> |&nbsp; 
        <Link to="/truck/new">New Truck</Link>
      </header>
      <Router>
        <Dashboard path="/" />
        <NewTruck path="/truck/new" />
        <EditTruck path="/truck/:id/edit" />
        <OneTruck path="/truck/:id" />
      </Router>  
    </div>
  );
}

export default App;