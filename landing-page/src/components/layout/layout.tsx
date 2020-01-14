import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { Header } from '../general';
import { customTheme } from '../../assets/css/materialTheme';

class Layout extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={customTheme}>
                <Header />
                {this.props.children}
            </MuiThemeProvider>
        )
    }
}

export default Layout