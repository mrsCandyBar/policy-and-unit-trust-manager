import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, LifeInsuranceStoreState, ILifeInsuranceStoreState } from '../stores/lifeInsuranceStore';
import { Button, Typography } from '@material-ui/core';

interface ILifeInsuranceProps extends LifeInsuranceStoreState {
  classes: any;
}

interface ILifeInsuranceState extends ILifeInsuranceStoreState {
  classes: any;
}

class LifeInsurance extends Component<ILifeInsuranceProps, ILifeInsuranceState> {

  public static getDerivedStateFromProps(nextProps: LifeInsuranceStoreState, prevState: ILifeInsuranceState): ILifeInsuranceState {
    const newState = {
      ...prevState,
      activeSlide: nextProps.activeSlide,
      numberOfSlides: nextProps.slideContent ? nextProps.slideContent.length : 0,
      slideContent: nextProps.slideContent
    }
    return newState;
  }

  constructor(props: ILifeInsuranceProps) {
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
          Life Insurance Page
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
  (state: any) => state.lifeInsurance,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(LifeInsurance);