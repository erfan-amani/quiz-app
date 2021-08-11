import { configureStore } from '@reduxjs/toolkit';
import questionReducer from '../feature/quiz/quizSlice';

const store = configureStore({
  reducer: questionReducer,
});

export default store;
