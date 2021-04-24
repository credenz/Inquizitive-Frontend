import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Instructions from "./components/Instructions";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/instructions">
          <Instructions />
        </Route>
        <Redirect/>
      </Switch>
    </Router>
  );
};

export default App;
