import { Redirect, Route, Switch } from 'react-router-dom';
import Container from './feature/Ui/Container';
import Question from './pages/Question';
import Result from './pages/Result';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-br from-purple-400 to-pink-200">
      <Container>
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/quiz">
            <Question />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
