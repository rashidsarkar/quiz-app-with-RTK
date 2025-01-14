import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { Progress } from "../ui/progress";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function QuizSummary() {
  const { question, userAnswers } = useAppSelector((state) => state.quiz);

  // Calculate correct answers and percentage
  const correctAnsCount = question.reduce((count, qus, index) => {
    return qus.correctAnswer === userAnswers[index] ? count + 1 : count;
  }, 0);
  const correctPercentage = (correctAnsCount / question.length) * 100;
  const incorrectAnswers = question.length - correctAnsCount;

  // Determine performance message
  let performanceMessage = "Keep practicing!";
  if (correctPercentage >= 80) {
    performanceMessage = "Excellent performance!";
  } else if (correctPercentage >= 50) {
    performanceMessage = "Good job! You're getting there.";
  }

  return (
    <Card className="max-w-lg mx-auto p-6 rounded-xl shadow-xl">
      <CardHeader>
        <h2 className="text-2xl font-bold">Quiz Summary</h2>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-medium mb-4">
          You got {correctAnsCount} out of {question.length} correct!
        </h3>

        {/* Dynamic Progress Bar */}
        <div className="mb-4">
          <Progress
            value={correctPercentage}
            className="h-4 rounded-full bg-gray-200"
          />
          <div className="flex justify-between mt-2">
            <span className="text-sm">{correctPercentage}%</span>
            <span className="text-sm">{performanceMessage}</span>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-4">
          <p className="text-sm">
            <strong>Incorrect Answers:</strong> {incorrectAnswers}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-sm">
            {performanceMessage} Keep practicing to improve your performance.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
