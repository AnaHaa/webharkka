import React, { useState } from 'react';

import styles from './Quiz.module.css';

function Quiz() {
    // Like with the chart, we are making the quiz questions and answers with booleans
    const questions = [
        {
            questionText: 'Do you have a fever?',
            answerOptions: [
                { answerText: 'Yes', isCorrect: true},
                { answerText: 'No', isCorrect: false},
            ],
        },
        {
            questionText: 'Do you have a dry cough?',
            answerOptions: [
                { answerText: 'Yes', isCorrect: true},
                { answerText: 'No', isCorrect: false},
            ],
        },
        {
            questionText: 'Are you more tired than normally?',
            answerOptions: [
                { answerText: 'Yes', isCorrect: true},
                { answerText: 'No', isCorrect: false},
            ],
        },
        {
            questionText: 'Are you suffering from loss of senses?',
            answerOptions: [
                { answerText: 'Yes', isCorrect: true},
                { answerText: 'No', isCorrect: false},
            ],
        },
        {
            questionText: 'Are you having trouble breathing?',
            answerOptions: [
                { answerText: 'Yes', isCorrect: true},
                { answerText: 'No', isCorrect: false},
            ],
        },
    ];

    // Use useState to set and format the data
    const [ currentQuestion, setCurrentQuestion ] = useState(0);
    const [ showScore, setShowScore ] = useState(false);
    const [ score, setScore ] = useState(0);

    // Function to check if the answer is correct and send the next question
    const handleAnswer = (isCorrect) => {
        // If boolean is true, add to the score + 1
        if (isCorrect === true) {
            setScore(score + 1);
        } 
        // Add the next question
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            // if the questions are over, show the score
            setShowScore(true);
        }
    };

    // Score check, if score over 0 user might have covid
    // returns the data for each option
    const answer = (score) => {
        if (score > 0) {
            return 'I advise you to get tested for the COVID - 19 virus.';
        } else return 'You do not have any of the common symptoms.';
    };

    // The return portion
    // Quiz, uses counting variables to set the question and buttons to capture the question answer
    // Returns the score if over, checks from array length
	return (
		<div className={styles.quizbox}>
            {showScore ? ( <div className={styles.scoresection}>{answer(score)}</div>)
        :   (
				<>
					<div className={styles.questionsection}>
						<div className={styles.questioncount}>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className={styles.questiontext}>{questions[currentQuestion].questionText}</div>
					</div>
					<div className={styles.answersection}>
						{questions[currentQuestion].answerOptions.map((answerOptions) => <button className={styles.button} onClick={() => handleAnswer(answerOptions.isCorrect)}>{ answerOptions.answerText }</button>)}
					</div>
				</>
		    )}
		</div>
	);
}

export default Quiz;