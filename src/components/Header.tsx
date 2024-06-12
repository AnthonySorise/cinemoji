import React from 'react';
import { Box, Button } from '@mui/material';

interface HeaderProps {
    buttonText: string;
    isButtonDisabled: boolean;
    startGame: () => void;
}

const Header: React.FC<HeaderProps> = ({ buttonText, isButtonDisabled, startGame }) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" p={2}>
            <Box className='title' display="flex" justifyContent="center" mb={2}>
                <span role="img" aria-label="movie projector" style={{ marginRight: 8 }}>
                    🎥
                </span>
                <span style={{ margin: 0, fontWeight: 'bold', color: 'goldenrod' }}>CINEMOJI</span>
                <span role="img" aria-label="smiley face" style={{ marginLeft: 8 }}>
                    😊
                </span>
            </Box>
            <Button variant="contained" color="primary" onClick={startGame} disabled={isButtonDisabled}>
                {buttonText}
            </Button>
        </Box>
    );
};

export default Header;