import { Route, Switch, withRouter } from "react-router";
import Question from './QuestionComponent';

function Main() {
    return (
        <Switch>
            <Route path='/questions' component={() => <Question />} />
        </Switch>
    );
}

export default withRouter(Main);