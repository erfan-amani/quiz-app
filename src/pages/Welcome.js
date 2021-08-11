import { useContext } from 'react';
import CategoryContext from '../feature/category/category-context';
import TopicForm from '../feature/category/TopicForm';
import Card from '../feature/Ui/Card';

const Welcome = () => {
  const categoryCtx = useContext(CategoryContext);

  if (!categoryCtx.list || categoryCtx.list.length === 0) {
    categoryCtx.fetchCategories();
  }

  return (
    <Card>
      <h1 className="text-4xl font-bold">Quizy</h1>
      <p className="text-lg max-w-2/3 sm:max-m-4/5 text-center m-auto">
        Hi there👋
        <br /> for starting the quiz choose a topic
      </p>
      <TopicForm categories={categoryCtx.list} />
    </Card>
  );
};

export default Welcome;
