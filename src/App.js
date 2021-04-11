// import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from 'react-router';
import Home from './Components/HomeComponents/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
