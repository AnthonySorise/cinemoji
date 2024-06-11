import React from 'react';
import { Typography } from '@mui/material';

interface QuestionProps {
    text: string;
}

const Question: React.FC<QuestionProps> = ({ text }) => {
    return (
        <Typography variant="h5" align="center">
            {text}
        </Typography>
    );
};

export default Question;