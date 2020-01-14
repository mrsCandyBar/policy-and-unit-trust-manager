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
      medicalAidList: nextProps.medicalAidList,
      selectedMedicalAid: nextProps.selectedMedicalAid
    }
    return newState;
  }

  constructor(props: IMedicalAidProps) {
    super(props);
    this.state = {
      classes: this.props.classes,
      medicalAidList: this.props.medicalAidList,
      selectedMedicalAid: this.props.selectedMedicalAid
    }
  }

  public componentDidMount() {
    this.initialiseDataSet();
  }

  public initialiseDataSet() {
    this.props.getMedicalAidList();
  }

  public addMedicalAidPolicy = () => {
    this.props.addMedicalAid();
  }

  render() {
    const { medicalAidList, selectedMedicalAid } = this.state;

    return (
      <main>
        <Typography>
          Medical Aid Page
        </Typography>

        all medical aid policies

        {medicalAidList.map(policy => {
          return (
            <React.Fragment>
              <Typography key={policy.id}>
                {policy.label}
              </Typography>

              <Button onClick={() => this.props.deleteMedicalAid(policy.id)}>
                Remove
              </Button>
            </React.Fragment>
          )
        })}

        <Button onClick={this.addMedicalAidPolicy}>
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