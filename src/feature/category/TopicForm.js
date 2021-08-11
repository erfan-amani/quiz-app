import { useDispatch } from 'react-redux';
import { useRef } from 'react';

import LoadingSpinner from '../Ui/LoadingSppiner';
import { fetchQusetion } from '../quiz/quizSlice';
import { useHistory } from 'react-router-dom';

const TopicForm = ({ categories }) => {
  const selectRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    const topic = selectRef.current.value;
    dispatch(fetchQusetion(topic));

    history.push('/quiz');
  };

  const renderedList = categories.map((c) => (
    <option key={c.id} value={c.id}>
      {c.name}
    </option>
  ));

  if (!categories || categories.length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col items-center justify-center gap-8"
    >
      <select
        ref={selectRef}
        className="text-gray-800 rounded-lg pl-2 pr-1 max-w-4/5"
      >
        {renderedList}
      </select>
      <button
        type="submit"
        className="px-6 py-2 bg-pink-500 rounded-xl shadow-sm text-gray-100 font-basic hover:bg-pink-400 focus:ring-4 ring-pink-300"
      >
        Let's go 🚀
      </button>
    </form>
  );
};

export default TopicForm;
