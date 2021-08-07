const { default: AnswerBox } = require('./AnswerBox');

const AnswersList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 text-white">
      <AnswerBox />
      <AnswerBox />
      <AnswerBox />
      <AnswerBox />
    </div>
  );
};

export default AnswersList;
