import TopicForm from '../feature/TopicForm';
import Card from '../feature/Ui/Card';

const Welcome = () => {
  return (
    <Card>
      <h1 className="text-4xl font-bold">Quizy</h1>
      <p className="text-lg max-w-2/3 sm:max-m-4/5 text-center m-auto">
        Hi there👋
        <br /> for starting the quiz choose a topic
      </p>
      <TopicForm />
    </Card>
  );
};

export default Welcome;
