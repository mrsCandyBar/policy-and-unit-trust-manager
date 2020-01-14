import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, UnitTrustStoreState, IUnitTrustStoreState } from '../stores/unitTrustStore';
import { Button, Typography } from '@material-ui/core';

interface IUnitTrustProps extends UnitTrustStoreState {
  classes: any;
}

interface IUnitTrustState extends IUnitTrustStoreState {
  classes: any;
}

class UnitTrust extends Component<IUnitTrustProps, IUnitTrustState> {

  public static getDerivedStateFromProps(nextProps: UnitTrustStoreState, prevState: IUnitTrustState): IUnitTrustState {
    const newState = {
      ...prevState,
      activeSlide: nextProps.activeSlide,
      numberOfSlides: nextProps.slideContent ? nextProps.slideContent.length : 0,
      slideContent: nextProps.slideContent
    }
    return newState;
  }

  constructor(props: IUnitTrustProps) {
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
          Unit Trust Page
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
  (state: any) => state.unitTrust,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(UnitTrust);