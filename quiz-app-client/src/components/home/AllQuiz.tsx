import { useGetAllQuizQuery } from "@/redux/api/quizApi";
import React from "react";

export default function AllQuiz() {
  const { data, isLoading, error } = useGetAllQuizQuery(undefined);

  console.log(data);
  return <div>AllQuiz</div>;
}
