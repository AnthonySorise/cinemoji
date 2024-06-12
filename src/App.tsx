import React, { useState } from 'react';
import { Container, Box, Grid } from '@mui/material';
import Header from './components/Header';
import QuestionText from './components/QuestionText';
import AnswerButtons from './components/AnswerButtons';
import './App.css';
import { questions } from './questions';

const App: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
    const [currentAnswers, setCurrentAnswers] = useState<string[]>([]);
    const [buttonText, setButtonText] = useState<string>("New Game");
    const [isAnswerNeeded, setIsAnswerNeeded] = useState<boolean>(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);

    const startGame = () => {
        const questionKeys = Object.keys(questions);
        const randomQuestion = questionKeys[Math.floor(Math.random() * questionKeys.length)];
        const correctAnswer = questions[randomQuestion];
        const wrongAnswers = questionKeys
            .filter(key => key !== randomQuestion)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(key => questions[key]);

        const allAnswers = [correctAnswer, ...wrongAnswers].sort(() => 0.5 - Math.random());

        setCurrentQuestion(randomQuestion);
        setCurrentAnswers(allAnswers);
        setButtonText("Next Question");
        setIsAnswerNeeded(true);
        setSelectedAnswer(null);
        setCorrectAnswer(correctAnswer);
    };

    const handleAnswerClick = (answer: string) => {
        if (isAnswerNeeded) {
            setSelectedAnswer(answer);
            setIsAnswerNeeded(false);
        }
    };

    return (
        <Container className='appContainer'>
            <Header buttonText={buttonText} isButtonDisabled={isAnswerNeeded} startGame={startGame} />
            <Box display="flex" justifyContent="center" alignItems="center" p={2}>
                <QuestionText text={currentQuestion || "Can you guess the movie from the emojis? Press 'New Game' to play!"} />
            </Box>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <AnswerButtons
                    options={currentAnswers}
                    selectedAnswer={selectedAnswer}
                    correctAnswer={correctAnswer}
                    onAnswerClick={handleAnswerClick}
                />
            </Grid>
        </Container>
    );
};

export default App;