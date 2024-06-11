import React from 'react';
import { Container, Box, Grid } from '@mui/material';
import Header from './components/Header';
import Question from './components/Question';
import AnswerButtons from './components/AnswerButtons';
import './App.css';

const App: React.FC = () => {
    return (
        <Container className='appContainer'>
            <Header />
            <Box display="flex" justifyContent="center" alignItems="center" p={2}>
                <Question text="Can you guess the movie from the emojis? Press 'New Game' to play!" />
            </Box>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <AnswerButtons options={["Option 1", "Option 2", "Option 3", "Option 4"]} />
            </Grid>
        </Container>
    );
};

export default App;
