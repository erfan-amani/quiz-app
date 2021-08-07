const { default: AnswersList } = require('./AnswersList');

const Question = () => {
  return (
    <div className="min-w-4/5 md:min-w-3/5 lg:min-w-2/5">
      <div className="bg-indigo-600 text-white font-poppins w-full text-center py-12 rounded-xl mb-6 shadow-lg">
        <p>Question will show here!!</p>
      </div>
      <AnswersList />
    </div>
  );
};

export default Question;
