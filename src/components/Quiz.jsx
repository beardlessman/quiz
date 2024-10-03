import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

const Quiz = () => {
    const [givenAnswers, setGivenAnswers] = useState([]);

    const activeQuestionIndex = givenAnswers.length;

    const isQuizCompleted = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(
        (answer) => {
            setGivenAnswers((answers) => [...answers, answer]);
        },
        []
    );

    const handleSkipQuestion = useCallback(() => {
        handleSelectAnswer(null);
    }, [handleSelectAnswer]);


    if (isQuizCompleted) {
        return <Summary answers={givenAnswers} />
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                questionIndex={activeQuestionIndex}
                onSkip={handleSkipQuestion}
                onAnswer={handleSelectAnswer}
            />
        </div>
    );
};

export default Quiz;
