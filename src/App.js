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
import Endpage from "./components/Endpage";
import Instruction from "./components/Instruction";
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
        <Route exact path="/endpage">
          <Endpage/>
        </Route>
        <Route exact path="/ins">
          <Instruction/>
        </Route>
        <Redirect/>
      </Switch>
    </Router>
  );
};

export default App;
