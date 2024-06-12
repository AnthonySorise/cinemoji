import React, { useState } from 'react';
import { Container, Box, Grid, Button } from '@mui/material';
import Header from './components/Header';
import QuestionText from './QuestionText';
import AnswerButtons from './components/AnswerButtons';
import './App.css';
import { questions } from './questions';

const App: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
    const [currentAnswers, setCurrentAnswers] = useState<string[]>([]);

    const startGame = () => {
        const questionKeys = Object.keys(questions);
        const randomQuestion = questionKeys[Math.floor(Math.random() * questionKeys.length)];
        const correctAnswer = questions[randomQuestion];
        const wrongAnswers = questionKeys
            .filter(key => key !== randomQuestion)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(key => questions[key]);

        // Combine correct answer with wrong answers and shuffle
        const allAnswers = [correctAnswer, ...wrongAnswers].sort(() => 0.5 - Math.random());

        // Set state
        setCurrentQuestion(randomQuestion);
        setCurrentAnswers(allAnswers);
    };

    return (
        <Container className='appContainer'>
            <Header startGame={startGame} />
            <Box display="flex" justifyContent="center" alignItems="center" p={2}>
                <QuestionText text={currentQuestion || "Can you guess the movie from the emojis? Press 'New Game' to play!"} />
            </Box>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <AnswerButtons options={currentAnswers} />
            </Grid>
        </Container>
    );
};

export default App;