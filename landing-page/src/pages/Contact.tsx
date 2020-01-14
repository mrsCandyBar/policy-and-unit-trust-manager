import React, { Component } from 'react';

interface IContactProps {
  classes: any;
  history: any;
}

interface IContactState {
  classes: any;
}

class Contact extends Component<IContactProps, IContactState> {

  constructor(props: IContactProps) {
    super(props);
    this.state = {
      classes: this.props.classes
    }
  }

  render() {
    const { history } = this.props;
    return (
      <main>
        Contact Page<br/>

        <a onClick={() => history.push('/about')}>Go to not found page</a>
      </main>
    )
  }
}

export default Contact;