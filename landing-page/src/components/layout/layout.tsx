import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { Header, Footer } from '../general';
import { customTheme } from '../../assets/css/materialTheme';

class Layout extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={customTheme}>
                <Header />
                <Footer />
            </MuiThemeProvider>
        )
    }
}

export default Layout