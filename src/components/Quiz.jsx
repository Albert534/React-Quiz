import { useState, useCallback, useRef } from "react";
import Question from "./Question";
import QUESTIONS from "../question";

import Summary from "./Summary";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]); //Storing an answer
  const activeQuestionIndex = userAnswer.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswer((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );
  if (quizIsComplete) {
    return <Summary userAnswers={userAnswer} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
