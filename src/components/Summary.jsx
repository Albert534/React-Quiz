import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONSS from "../question";
export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONSS[index].answers[0]
  );
  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  ); // Fixed the calculation
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  ); // Fixed the calculation

  const wrongAnswerShare = 100 - skippedAnswers - correctAnswersShare;
  return (
    <div id="summary">
      <img src={quizCompleteImg} />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered corrctly</span>
        </p>

        <p>
          <span className="number">{wrongAnswerShare}%</span>
          <span className="text">wrong</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += "skipped";
          } else if (answer == QUESTIONSS[index].answers[0]) {
            cssClass += "correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONSS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
