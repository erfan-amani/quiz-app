import Card from '../feature/Ui/Card';

const { default: AnswersList } = require('../feature/question/AnswersList');

const Question = () => {
  return (
    <>
      <Card>
        <p>Question will show here!!</p>
      </Card>
      <AnswersList />
    </>
  );
};

export default Question;
