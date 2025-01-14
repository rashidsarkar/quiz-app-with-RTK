import AllQuiz from "./components/home/AllQuiz";
import Question from "./components/home/Question";
import QuizSummary from "./components/home/QuizSummary";
import { Button } from "./components/ui/button";
import { useAppSelector } from "./redux/hooks";

export default function App() {
  const { question, currentQuestionIndex, userAnswers, quizComplete } =
    useAppSelector((state) => state.quiz);
  console.log(quizComplete);
  return (
    <div className="container p-4 mx-auto">
      <h3 className="my-12 text-5xl text-center ">Jakana Quiz App</h3>
      <AllQuiz />
      {!quizComplete ? <Question /> : <QuizSummary />}
    </div>
  );
}
