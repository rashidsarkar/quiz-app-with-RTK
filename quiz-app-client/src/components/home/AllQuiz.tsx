import { useGetAllQuizQuery } from "@/redux/api/quizApi";
import React from "react";
import { Card } from "../ui/card";
import { TQuiz } from "@/types/Quiz/TQuiz";
import Loading from "../Loading/Loading";
import { useDispatch } from "react-redux";
import { setQuiz } from "@/redux/features/quiz/quizSlice";

export default function AllQuiz() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetAllQuizQuery(undefined);

  if (isLoading) return <Loading />;
  if (error) {
    return <p className="text-center text-red-500">Failed to load quizzes.</p>;
  }
  const handleSetQuiz = (questionItem) => {
    // console.log(qna);
    dispatch(setQuiz(questionItem));
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {data?.map((item: TQuiz, index: number) => (
        <Card
          key={index}
          onClick={() => handleSetQuiz(item.questions)}
          className="p-6 transition-shadow bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg"
        >
          <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
          <p className="mt-2 text-sm text-gray-600">
            A brief description for Quiz {index + 1}.
          </p>
        </Card>
      ))}
    </div>
  );
}
