import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Instructions from "./components/Instructions";
import Question from "./components/Questions/QuestionComponent";
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
        <Route exact path="/questions">
          <Question/>
        </Route>
        <Redirect/>
      </Switch>
    </Router>
  );
};

export default App;
