import React from 'react';
import { Grid, Button } from '@mui/material';

interface AnswerButtonsProps {
    options: string[];
}

const AnswerButtons: React.FC<AnswerButtonsProps> = ({ options }) => {
    return (
        <>
            {options.map((option, index) => (
                <Grid item xs={6} key={index}>
                    <Button variant="contained" color="secondary" fullWidth>
                        {option}
                    </Button>
                </Grid>
            ))}
        </>
    );
};

export default AnswerButtons;