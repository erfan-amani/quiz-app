import AnswerBox from './AnswerBox';

const AnswersList = ({ answers }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 text-white mt-6">
      {answers.map((answer) => (
        <AnswerBox key={answer} value={answer} />
      ))}
    </div>
  );
};

export default AnswersList;
