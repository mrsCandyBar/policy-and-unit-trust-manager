import { createMuiTheme } from '@material-ui/core';
//import { palette } from '@material-ui/system';

export const customTheme = new createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                fontWeight: "bold !important"
            }
        },
        MuiTextField: {
            root: {
                width: '100%'
            }
        }
    }
})