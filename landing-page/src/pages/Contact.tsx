import React, { Component } from 'react';

interface IContactProps {
  classes: any;
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
    return (
      <main>
        Contact Page<br/>

        <br/>
        <a href={'mailto:candicekbar@gmail.com'}>candicekbar@gmail.com</a>
      </main>
    )
  }
}

export default Contact;