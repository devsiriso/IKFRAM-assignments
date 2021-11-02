import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import { Conditional } from './components/Conditional';
import { Event } from './components/Event';
import { State } from './components/State'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Hooks } from './components/Hooks';

function App() {
  const Home = () => {
    return (<div>By S.A.M. van Schaik (S1099971) for IKFRAM.</div>)
  }

  return (
    <Router>
    <div>
      <nav>
        <p>Assignments:</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/state">State</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/conditional">Conditional</Link>
          </li>
          <li>
            <Link to="/event">Event handling</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/state">
          <State />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/conditional">
          <Conditional />
        </Route>
        <Route path="/event">
          <Event />
        </Route>
        <Route path="/hooks">
          <Hooks />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}


export default App;
