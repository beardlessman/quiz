import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useState } from "react";
import QUESTIONS from "../questions";

const Question = ({ onSkip, onAnswer, questionIndex }) => {
    const [answer, setAnswer] = useState({
        selectedAnswer: "",
        isCorrect: null,
    });

    const [nextVisible, setNextVisible] = useState(false);

    let timer = 10000;

    if (answer.selectedAnswer) {
        timer = 1000;
    }

    if (answer.isCorrect !== null) {
        timer = 2000;
    }

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null,
        });

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[questionIndex].answers[0] === answer,
            });

            setNextVisible(true);
        }, 2000);
    }

    let answerState = "";
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? "correct" : "wrong";
    } else if (answer.selectedAnswer) {
        answerState = "selected";
    }

    return (
        <div id="question">
            <h2>{QUESTIONS[questionIndex].text}</h2>
            <Answers
                selectedAnswer={answer.selectedAnswer}
                answers={QUESTIONS[questionIndex].answers}
                answerState={answerState}
                handleSelectAnswer={handleSelectAnswer}
            />
            {nextVisible && <button className="question-next" onClick={() => onAnswer(answer)}>Дальше</button>}
        </div>
    );
};

export default Question;
