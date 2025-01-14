import React from "react";
import { Button } from "../ui/button";
import {
  completeQuiz,
  nextQuestion,
  previousQuestion,
} from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function QuizControl() {
  const { question, currentQuestionIndex, userAnswers } = useAppSelector(
    (state) => state.quiz
  );
  // console.log(userAnswers);
  const dispatch = useAppDispatch();

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };
  const handlePreviousQuestion = () => {
    dispatch(previousQuestion());
  };
  const handleComplateQuestion = () => {
    dispatch(completeQuiz());
  };
  // console.log(userAnswers);
  const isAnsSelected = userAnswers[currentQuestionIndex] !== null;

  return (
    <>
      <Button
        disabled={currentQuestionIndex === 0}
        onClick={handlePreviousQuestion}
      >
        Previous
      </Button>
      {currentQuestionIndex < question.length - 1 && (
        <Button disabled={!isAnsSelected} onClick={handleNextQuestion}>
          Next
        </Button>
      )}
      {currentQuestionIndex === question.length - 1 && (
        <Button disabled={!isAnsSelected} onClick={handleComplateQuestion}>
          Submit
        </Button>
      )}
    </>
  );
}
