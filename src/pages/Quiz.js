import { useSelector } from 'react-redux';
import QuizQuestion from '../feature/quiz/QuizQuestion';
import Card from '../feature/Ui/Card';
import LoadingSpinner from '../feature/Ui/LoadingSppiner';

const Quiz = () => {
  const status = useSelector((state) => state.status);

  if (status === 'loading') {
    return (
      <Card>
        <LoadingSpinner />
      </Card>
    );
  }

  return <QuizQuestion />;
};

export default Quiz;
