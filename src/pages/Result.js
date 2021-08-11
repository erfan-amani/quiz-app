import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Card from '../feature/Ui/Card';
import { restartQuiz } from '../feature/quiz/quizSlice';

const Result = () => {
  const { correct, wrong } = useSelector((state) => state.result);
  const dispatch = useDispatch();
  const history = useHistory();

  const restartQuizHandler = () => {
    dispatch(restartQuiz());
    history.push('/');
  };

  const showDetailsHandler = () => {
    history.push('/detail');
  };

  return (
    <Card>
      <h2 className="text-3xl font-semibold">Good Job 🎉</h2>
      <div className="space-y-4 text-lg">
        <p>Summery:</p>
        <div className="flex items-center justify-center gap-4 font-mono text-2xl pb-6">
          <div>{correct} ✅</div>
          <div>{wrong} ❌</div>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <button
            onClick={showDetailsHandler}
            type="button"
            className="px-6 py-2 rounded-xl text-gray-200 text-basic underline"
          >
            Show detail
          </button>
          <button
            onClick={restartQuizHandler}
            type="button"
            className="px-6 py-2 bg-pink-500 rounded-xl shadow-sm text-gray-100 hover:bg-pink-400 focus:ring-4 ring-pink-300"
          >
            New quiz
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Result;
