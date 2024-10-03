import completeImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

const Summary = ({ answers }) => {
    const skippedAnswers = answers.filter((answer) => answer === null);
    const correctAnswers = answers.filter(
        (answer, index) => answer === QUESTIONS[index].answers[0]
    );

    const skippedPercent = Math.round((skippedAnswers.length / answers.length) * 100);
    const correctPercent = Math.round((correctAnswers.length / answers.length) * 100);
    const wrongPercent = 100 - skippedPercent - correctPercent;

    return (
        <div id="summary">
            <img src={completeImg} />
            <h2>Конец!</h2>

            <div id="summary-stats">
                <p>
                    <span className="number">{correctPercent}%</span>
                    <span className="text">Правильно</span>
                </p>

                <p>
                    <span className="number">{wrongPercent}%</span>
                    <span className="text">Неправильно</span>
                </p>
            </div>

            <ol>
                {answers.map((answer, index) => {
                    let className = "user-answer";

                    if (answer === null) {
                        className += " skipped";
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        className += " correct";
                    } else {
                        className += " wrong";
                    }

                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className={className}>{answer.selectedAnswer}</p>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default Summary;
