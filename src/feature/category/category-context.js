import { createContext, useState } from 'react';

const CategoryContext = createContext({
  list: [],
});

export default CategoryContext;

export const CategoryProvider = (props) => {
  const [loadedCategories, setLoadedCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://opentdb.com/api_category.php');
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Something wen' wrong!");
      }

      setLoadedCategories(data.trivia_categories);
    } catch (error) {
      throw new Error(error.message || 'Something went wrong!');
    }
  };

  return (
    <CategoryContext.Provider
      value={{ list: loadedCategories, fetchCategories: fetchCategories }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};
