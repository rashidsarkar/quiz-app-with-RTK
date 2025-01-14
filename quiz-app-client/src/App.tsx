import Question from "./components/home/Question";
import QuizSummary from "./components/home/QuizSummary";
import { Button } from "./components/ui/button";
import { useAppSelector } from "./redux/hooks";

export default function App() {
  const { question, currentQuestionIndex, userAnswers, quizComplete } =
    useAppSelector((state) => state.quiz);
  console.log(quizComplete);
  return (
    <div>
      <h3 className="text-center text-5xl my-12 ">Jakana Quiz App</h3>
      {!quizComplete ? <Question /> : <QuizSummary />}
    </div>
  );
}
