import './App.css';


import Main from './views/Main';
import { Router } from '@reach/router';
import CreateAuthor from './views/CreateAuthor';
import CreateQuote from './views/CreateQuote';
import EditAuthor from './views/EditAuthor';
import AuthorDetail from './views/AuthorDetails';



function App() {


  return (
    <div className="App">
      <Router>
        <Main path='/' />
        <CreateAuthor path='/new'  />
        <CreateQuote  path='/write/:id' />
        <AuthorDetail path='/quotes/:id' />
        <EditAuthor path='/edit/:id' />
      </Router>
    </div>
  );
}

export default App;
