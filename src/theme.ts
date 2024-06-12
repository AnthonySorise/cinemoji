import { createTheme } from '@mui/material/styles';
import { PaletteOptions } from '@mui/material/styles/createPalette';

const palette: PaletteOptions = {
    primary: {
        main: '#DAA520', // Hex code for goldenrod
        contrastText: '#fff',
    },
    secondary: {
        main: '#008080',
    },
};

const theme = createTheme({
    palette,
});

export default theme;
