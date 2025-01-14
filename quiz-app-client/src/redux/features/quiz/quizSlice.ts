import { quizData } from "@/components/home/quizData";
import { createSlice } from "@reduxjs/toolkit";
type TQuiz = {
  question: typeof quizData;
  currentQuestionIndex: number;
  userAnswers: (string | null)[];
  quizComplete: boolean;
};

const initialState: TQuiz = {
  question: [],
  userAnswers: [],
  currentQuestionIndex: 0,
  quizComplete: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { currentQuestionIndex, ans } = action.payload;

      state.userAnswers[currentQuestionIndex] = ans;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.question.length - 1) {
        state.currentQuestionIndex++;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
      }
    },
    completeQuiz: (state) => {
      state.quizComplete = true;
    },
    setQuiz: (state, action) => {
      state.question = action.payload;
    },
  },
});
export const {
  setAnswer,
  nextQuestion,
  previousQuestion,
  completeQuiz,
  setQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
