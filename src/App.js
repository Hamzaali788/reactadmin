import './App.css';
import Navbar from './Components/layout/Navbar';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import NotFound from './Components/Pages/NotFound';
import AddUser from './Users/AddUser';
import EditUser from './Users/Edituser';
import ViewUser from './Users/ViewUser';
 
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/About" component={About}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
        <Route exact path="/Users/add" component={AddUser}></Route>
        <Route exact path="/Users/edit/:id" component={EditUser}></Route>
        <Route exact path="/Users/view/:id" component={ViewUser}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
