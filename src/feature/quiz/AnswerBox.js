import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { questionAnswered } from './quizSlice';

const AnswerBox = ({ value }) => {
  const dispatch = useDispatch();
  const quizFinished = useSelector((state) => state.finished);
  const history = useHistory();

  const clickAnsweredHanlder = () => {
    dispatch(questionAnswered(value));
    if (quizFinished) history.push('/result');
  };

  return (
    <button
      onClick={clickAnsweredHanlder}
      className="bg-indigo-600 rounded-lg flex items-center justify-center py-4 px-6 w-full hover:bg-indigo-500 cursor-pointer shadow-md bg-opacity-40 backdrop-filter backdrop-blur-md"
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
};

export default AnswerBox;
