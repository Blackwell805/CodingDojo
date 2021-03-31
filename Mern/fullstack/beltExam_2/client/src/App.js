import './App.css';
import { Router } from '@reach/router';
import Dashboard from './views/Dashboard';
import NewMovie from './views/NewMovie';
import AddReview from './views/AddReview';
import OneMovie from './views/OneMovie';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Moldy Tomatoes</h1>
      </header>
      <Router>
        <Dashboard path="/" />
        <NewMovie path="/movies/new" />
        <AddReview path="/movies/:id/review" />
        <OneMovie path="/movies/:id" />
      </Router>  
    </div>
  );
}

export default App;