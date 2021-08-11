import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { CategoryProvider } from './feature/category/category-context';
import AnswerDetail from './feature/quiz/AnswerDetail';
import Container from './feature/Ui/Container';
import Detail from './pages/Detail';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Welcome from './pages/Welcome';

function App() {
  const questionRequestSend = useSelector(
    (state) => state.status === 'loading' || state.status === 'success'
  );
  const quizFinished = useSelector((state) => state.finished);

  return (
    <CategoryProvider>
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-br from-purple-400 to-pink-200">
        <Container>
          <Switch>
            <Route path="/" exact>
              <Welcome />
            </Route>
            {questionRequestSend && (
              <Route path="/quiz">
                <Quiz />
              </Route>
            )}
            {quizFinished && (
              <Fragment>
                <Route path="/result">
                  <Result />
                </Route>
                <Route path="/detail" exact>
                  <Detail />
                </Route>
                <Route path="/detail/:question">
                  <Detail />
                  <AnswerDetail />
                </Route>
              </Fragment>
            )}
            {/* <Route path="/detail/:question">
              <Detail />
              <AnswerDetail />
            </Route> */}
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Container>
      </div>
    </CategoryProvider>
  );
}

export default App;
