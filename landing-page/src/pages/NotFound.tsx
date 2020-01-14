import React, { Component } from 'react';

interface INotFoundProps {
  classes: any;
}

interface INotFoundState {
  classes: any;
}

class NotFound extends Component<INotFoundProps, INotFoundState> {

  constructor(props: INotFoundProps) {
    super(props);
    this.state = {
      classes: this.props.classes
    }
  }

  render() {
    return (
      <main>
        Not Found Page
      </main>
    )
  }
}

export default NotFound;