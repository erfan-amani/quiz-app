import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { restartQuiz } from '../feature/quiz/quizSlice';

const Detail = () => {
  const qustions = useSelector((state) => state.list);

  const dispatch = useDispatch();
  const history = useHistory();

  const restartQuizHandler = () => {
    dispatch(restartQuiz());
    history.push('/');
  };

  const content = qustions.map((q, index) => {
    return (
      <Fragment key={index}>
        <span className="py-3 px-2 bg-gray-200 text-gray-800 border-red-400 border-b-2">
          {q.correct === q.userAnswer ? '🟢' : '🔴'}
          <Link
            to={`/detail/${index}`}
            className="cursor-pointer hover:underline"
          >
            {' '}
            q{index}
          </Link>
        </span>
        <span
          className="py-3 px-2 col-span-2 border-b-2 border-red-400 bg-gray-200 text-gray-800 border-l-2 sm:border-l-0"
          dangerouslySetInnerHTML={{ __html: q.correct }}
        />
        <span
          className="py-3 px-2 col-span-2 border-b-2 border-red-400 bg-gray-200 text-gray-800 border-l-2 sm:border-l-0"
          dangerouslySetInnerHTML={{ __html: q.userAnswer }}
        />
      </Fragment>
    );
  });

  return (
    <div className="text-center">
      <div className="grid grid-cols-5 rounded-xl z-20 relative">
        <span className="py-3 px-2 bg-red-400 text-gray-100 font-semibold">
          Question
        </span>
        <span className="py-3 px-2 bg-red-400 text-gray-100 col-span-2 font-semibold">
          Correct answer
        </span>
        <span className="py-3 px-2 bg-red-400 text-gray-100 col-span-2 font-semibold">
          Your answer
        </span>
        {content}
        <div className="col-span-5 bg-gray-200 pb-4">
          <button
            onClick={restartQuizHandler}
            type="button"
            className="mt-4 px-6 py-2 bg-red-500 rounded-xl shadow-sm text-gray-100 hover:bg-pink-400 focus:ring-4 ring-pink-300 font-bold"
          >
            Start a new quiz 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
