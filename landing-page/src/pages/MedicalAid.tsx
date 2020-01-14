import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, MedicalAidStoreState, IMedicalAidStoreState } from '../stores/medicalAidStore';
import { Button, Typography } from '@material-ui/core';

interface IMedicalAidProps extends MedicalAidStoreState {
  classes: any;
}

interface IMedicalAidState extends IMedicalAidStoreState {
  classes: any;
}

class MedicalAid extends Component<IMedicalAidProps, IMedicalAidState> {

  public static getDerivedStateFromProps(nextProps: MedicalAidStoreState, prevState: IMedicalAidState): IMedicalAidState {
    const newState = {
      ...prevState,
      activeSlide: nextProps.activeSlide,
      numberOfSlides: nextProps.slideContent ? nextProps.slideContent.length : 0,
      slideContent: nextProps.slideContent
    }
    return newState;
  }

  constructor(props: IMedicalAidProps) {
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
          Medical Aid Page
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
  (state: any) => state.medicalAid,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(MedicalAid);