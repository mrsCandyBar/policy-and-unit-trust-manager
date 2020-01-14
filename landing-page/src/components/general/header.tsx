import React, { Component } from 'react';
import { Button, withStyles } from '@material-ui/core';
import Logo from '../../assets/images/logo.svg';

const useStyles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
};

interface IHeaderProps {
  classes: any;
}

interface IHeaderState {
  classes: any;
}

class Header extends Component<IHeaderProps, IHeaderState> {

  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      classes: this.props.classes
    }
  }

  render() {
    const { classes } = this.state;
    return (
      <header className="App-header">
        
        <img 
          src={Logo} 
          className="App-logo" 
          alt="logo" 
        />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Button
          className={classes.root}
          href="https://reactjs.org"
          target="_blank"
          variant="contained" 
          color="primary"
        >
          Learn React
        </Button>
      </header>
    )
  }
}

export default withStyles(useStyles)(Header);