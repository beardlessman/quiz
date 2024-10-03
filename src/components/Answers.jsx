import { useRef } from "react";

const Answers = ({
    answers,
    selectedAnswer,
    answerState,
    handleSelectAnswer,
}) => {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort((_a, _b) => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
                return (
                    <li key={answer} className="answer">
                        <button
                            onClick={() => handleSelectAnswer(answer)}
                            className={
                                answer === selectedAnswer ? answerState : ""
                            }
                            disabled={answerState !== ""}
                        >
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Answers;
