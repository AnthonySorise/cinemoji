import React from 'react';
import { Typography } from '@mui/material';

interface QuestionTextProps {
    text: string;
}

const QuestionText: React.FC<QuestionTextProps> = ({ text }) => {
    return (
        <Typography variant="h5" align="center">
            {text}
        </Typography>
    );
};

export default QuestionText;