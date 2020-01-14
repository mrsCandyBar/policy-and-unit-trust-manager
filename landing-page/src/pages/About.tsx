import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, AboutStoreState, IAboutStoreState } from '../stores/aboutStore';
import { Button, Typography } from '@material-ui/core';

interface IAboutProps extends AboutStoreState {
  classes: any;
}

interface IAboutState extends IAboutStoreState {
  classes: any;
}

class About extends Component<IAboutProps, IAboutState> {

  public static getDerivedStateFromProps(nextProps: AboutStoreState, prevState: IAboutState): IAboutState {
    const newState = {
      ...prevState,
      activeSlide: nextProps.activeSlide,
      numberOfSlides: nextProps.slideContent ? nextProps.slideContent.length : 0,
      slideContent: nextProps.slideContent
    }
    return newState;
  }

  constructor(props: IAboutProps) {
    super(props);
    this.state = {
      classes: this.props.classes,
      activeSlide: 0,
      numberOfSlides: 0,
      slideContent: []
    }
  }

  public componentDidMount() {
    this.initialiseDataSet();
  }

  public initialiseDataSet() {
    this.props.getSlides();
  }

  public addNewSlide = () => {
    this.props.addSlide("New slide");
  }

  render() {
    const { activeSlide, numberOfSlides, slideContent } = this.state;

    return (
      <main>
        <Typography>
          About Page
        </Typography>

        active slide : {activeSlide}<br />
        number of slides : {numberOfSlides}

        {slideContent.map((slide, index) => {
          return (
            <React.Fragment>
              <Typography key={index}>
                {slide}
              </Typography>

              <Button onClick={() => this.props.removeSlide(index)}>
                Remove Slide
              </Button>
            </React.Fragment>
          )
        })}

        <Button onClick={this.addNewSlide}>
          Add Slide
        </Button>

      </main>
    )
  }
}

export default connect(
  (state: any) => state.about,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(About);