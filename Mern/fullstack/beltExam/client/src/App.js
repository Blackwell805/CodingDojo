import './App.css';
import { Router} from '@reach/router';
import Main from './views/Main';
import AddPet from './views/AddPet';
import EditPet from './views/EditPet';
import PetDetails from './views/PetDetails'


function App() {


  return (
    <div className="App">
      <Router>
        <Main path='/'/>
        <AddPet path='/pets/new' />
        <EditPet path='/pets/:id/edit' />
        <PetDetails path='/pets/:id' />
      </Router>
    </div>
  );
}

export default App;
