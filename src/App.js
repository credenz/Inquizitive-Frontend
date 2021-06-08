import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";
import Question from "./components/Question/QuestionComponent";
import Endpage from "./components/Endpage/Endpage";
import Instruction from "./components/Instructions/Instruction";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
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
