import {
  BrowserRouter as Router, Redirect, Route,
  Switch
} from "react-router-dom";
import "./App.css";
import Endpage from "./components/Endpage/Endpage";
import Home from "./components/Home/Home";
import Instruction from "./components/Instructions/Instruction";
import InsWithoutProceed from "./components/Instructions/InsWithoutProceed";
import Question from "./components/Question/QuestionComponent";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/questions">
          <Question />
        </Route>
        <Route exact path="/endpage">
          <Endpage />
        </Route>
        <Route exact path="/ins">
          <Instruction />
        </Route>
        <Route exact path="/instructions">
          <InsWithoutProceed />
        </Route>
        <Redirect />
      </Switch>
    </Router>
  );
};

export default App;
