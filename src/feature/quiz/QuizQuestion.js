import { useSelector } from 'react-redux';

import Card from '../Ui/Card';
import AnswersList from './AnswersList';

const QuizQuestion = () => {
  const questionData = useSelector((state) => state?.list[state.current]);

  return (
    <>
      <Card>
        <p
          className="w-full m-auto"
          dangerouslySetInnerHTML={{ __html: questionData.question }}
        />
      </Card>
      <AnswersList answers={questionData.answers} />
    </>
  );
};

export default QuizQuestion;
