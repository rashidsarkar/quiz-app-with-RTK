import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAnswer } from "@/redux/features/quiz/quizSlice";
import QuizControl from "./QuizControl";
import { cn } from "@/lib/utils";

export default function Question() {
  const dispatch = useAppDispatch();
  const { question, currentQuestionIndex, userAnswers } = useAppSelector(
    (state) => state.quiz
  );
  // console.log(question);
  const currentQuestion = question[currentQuestionIndex];

  const currentAns = userAnswers[currentQuestionIndex];
  const handleAnswerChange = (ans: string) => {
    dispatch(setAnswer({ currentQuestionIndex, ans }));
  };
  // console.log(currentAns);
  return (
    <div className="flex justify-center ">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
          <CardDescription>
            Question {currentQuestionIndex + 1} of {question.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {currentQuestion.options.map((item) => {
            return (
              <Button
                onClick={() => handleAnswerChange(item)}
                size={"lg"}
                className="w-full mt-3"
                variant={currentAns === item ? "default" : "outline"}

                // className={cn("w-full mt-3", {
                //   "bg-green-500": currentAns === item,
                //   // "bg-gray-300": currentAns !== item,
                // })}
              >
                {item}
              </Button>
            );
          })}
        </CardContent>
        <CardFooter className="flex justify-between">
          <QuizControl />
        </CardFooter>
      </Card>
    </div>
  );
}
