import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  result: {
    correct: 0,
    wrong: 0,
  },
  current: 0,
  status: null,
  finished: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    questionsLoaded(state, action) {
      state.list = action.payload;
    },
    questionAnswered: (state, action) => {
      // store user answer
      state.list[state.current].userAnswer = action.payload;

      // update result state
      const isCorrect = action.payload === state.list[state.current].correct;
      isCorrect ? state.result.correct++ : state.result.wrong++;

      // check question number and go to the next question
      state.current++;
      if (state.current === 9) state.finished = true;
    },
    restartQuiz: () => {
      return initialState;
    },
    sendRequest: (state) => {
      state.status = 'loading';
    },
    failedRequest: (state) => {
      state.status = 'failed';
    },
    successRequest: (state) => {
      state.status = 'success';
    },
  },
});

export const {
  questionsLoaded,
  questionAnswered,
  successRequest,
  sendRequest,
  failedRequest,
  restartQuiz,
} = quizSlice.actions;

const suffleAnswers = (array, value) => {
  const index = Math.floor(Math.random() * 3);
  const swapedItem = array[index];
  array[index] = value;
  array.push(swapedItem);
  return array;
};

export const fetchQusetion = (category) => {
  return async (dispatch) => {
    dispatch(sendRequest());
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`
      );
      const data = await response.json();

      if (data.response_code !== 0) {
        throw new Error(response.message || 'Something went wrong!');
      }

      const formattedData = data.results.map((q) => {
        return {
          question: q.question,
          answers: [...suffleAnswers(q.incorrect_answers, q.correct_answer)],
          correct: q.correct_answer,
        };
      });

      dispatch(questionsLoaded(formattedData));

      dispatch(successRequest());
    } catch (error) {
      console.log(error.message);
      dispatch(failedRequest());
    }
  };
};

export default quizSlice.reducer;
