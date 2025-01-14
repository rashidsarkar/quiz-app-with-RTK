import AllQuiz from "./components/home/AllQuiz";
import Question from "./components/home/Question";
import { useAppSelector } from "./redux/hooks";

export default function App() {
  const { quizComplete } = useAppSelector((state) => state.quiz);

  return (
    <div className="container p-4 mx-auto">
      <h3 className="my-12 text-5xl font-bold text-center text-gray-800">
        Jakana Quiz App
      </h3>

      <AllQuiz />

      {!quizComplete && <Question />}
    </div>
  );
}
