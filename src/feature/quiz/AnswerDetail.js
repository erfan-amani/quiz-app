import { Link, useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Modal from '../Ui/Modal';
import CloseIcon from '../Icon/CloseIcon';

const AnswerDetail = () => {
  const { question: qNumber } = useParams();
  const history = useHistory();
  const questionData = useSelector((state) => state.list[qNumber]);

  const closeModalHandler = () => {
    history.push('/detail');
  };

  const renderedAnswersList = questionData.answers.map((answer, index) => {
    const userAnswer = questionData.userAnswer;
    const isCorrect = questionData.correct === answer;
    const className = `grid grid-cols-2 py-4 ${
      isCorrect ? 'text-green-500' : 'text-gray-500'
    }`;

    return (
      <p className={className} key={index}>
        <span
          className="justify-self-start"
          dangerouslySetInnerHTML={{ __html: `${index + 1}- ${answer}` }}
        />
        <span className="text-gray-800 font-semibold ml-8">
          {userAnswer === answer ? '👈 Yours' : ''}
        </span>
      </p>
    );
  });

  return (
    <Modal onClose={closeModalHandler}>
      <Link to="/detail" className="absolute top-3 right-3 cursor-pointer">
        <CloseIcon />
      </Link>
      <p
        className="mb-8"
        dangerouslySetInnerHTML={{ __html: questionData.question }}
      />
      <div className="flex flex-col items-start justify-center">
        {renderedAnswersList}
      </div>
    </Modal>
  );
};

export default AnswerDetail;
