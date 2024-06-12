import React from 'react';
import { Grid, Button } from '@mui/material';

interface AnswerButtonsProps {
    options: string[];
    selectedAnswer: string | null;
    correctAnswer: string | null;
    onAnswerClick: (answer: string) => void;
}

const AnswerButtons: React.FC<AnswerButtonsProps> = ({ options, selectedAnswer, correctAnswer, onAnswerClick }) => {
    const getButtonColor = (option: string) => {
        if (selectedAnswer) {
            if (option === correctAnswer) return "success";
            if (option === selectedAnswer) return "error";
        }
        return "secondary";
    };

    return (
        <>
            {options.map((option, index) => (
                <Grid item xs={6} key={index}>
                    <Button
                        variant="contained"
                        color={getButtonColor(option)}
                        fullWidth
                        onClick={() => onAnswerClick(option)}
                    >
                        {option}
                    </Button>
                </Grid>
            ))}
        </>
    );
};

export default AnswerButtons;