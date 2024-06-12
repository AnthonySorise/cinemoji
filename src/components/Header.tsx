import React from 'react';
import { Box, Button } from '@mui/material';

interface HeaderProps {
    startGame: () => void;
}

const Header: React.FC<HeaderProps> = ({ startGame }) => {
    return (
        <>
            <Box className='title' display="flex" justifyContent="center">
                <span role="img" aria-label="movie projector" style={{ marginRight: 8 }}>
                    🎥
                </span>
                <span style={{ margin: 0, fontWeight: 'bold', color: 'goldenrod' }}>CINEMOJI</span>
                <span role="img" aria-label="smiley face" style={{ marginLeft: 8 }}>
                    😊
                </span>
            </Box>
            <Button variant="contained" color="primary" onClick={startGame}>
                New Game
            </Button>
        </>
    );
};

export default Header;