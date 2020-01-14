import { createMuiTheme } from '@material-ui/core';
//import { palette } from '@material-ui/system';

export const customTheme = new createMuiTheme({
    palette: {
        primary: {
            light: "hsl(168, 100%, 75%)",
            main: "hsl(168, 100%, 50%)",
            dark: "hsl(168, 100%, 35%)",
            contrastText: "hsl(168, 100%, 0%)",
        },
        /*secondary: {
            light: palette.secondary.A200,
            main: palette.secondary.A400,
            dark: palette.secondary.A700,
            //contrastText: getContrastText(palette.secondary.A400),
        },
        error: {
            light: palette.error[300],
            main: palette.error[500],
            dark: palette.error[700],
            //contrastText: getContrastText(palette.error[500]),
        },*/
    },
    overrides: {
        MuiButton: {
            root: {
                fontWeight: "bold !important"
            }
        }
    }
})