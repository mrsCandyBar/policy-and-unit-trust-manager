import React, { Component } from 'react';
import { Button, withStyles } from '@material-ui/core';
import NavigationMenu from '../../routing/navigation';

const useStyles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
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
    return (
      <header className="Profile-header">
        <NavigationMenu />
      </header>
    )
  }
}

export default withStyles(useStyles)(Header);