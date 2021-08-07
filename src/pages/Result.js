const { default: Card } = require('../feature/Ui/Card');

const Result = () => {
  return (
    <Card>
      <h2 className="text-3xl font-semibold">Good Job 🎉</h2>
      <div className="space-y-4 text-lg">
        <p>Your result:</p>
        <div className="flex items-center justify-center gap-4 font-mono text-2xl">
          <div>5 ✅</div>
          <div>5 ❌</div>
        </div>
      </div>
    </Card>
  );
};

export default Result;
