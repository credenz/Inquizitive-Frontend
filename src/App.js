import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Question from './components/Question/QuestionComponent';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/questions">
          <Question />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
