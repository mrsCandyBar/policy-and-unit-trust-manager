import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, MedicalAidStoreState, IMedicalAidStoreState } from '../stores/medicalAidStore';
import { Button, Typography, List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import CustomForm from '../components/form/customForm';

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

    const displaySelectedItem = (
      <React.Fragment>
        <Button onClick={() => this.props.selectMedicalAid()} variant="contained" color="primary"> go back </Button>
        <CustomForm 
          selectedObject={selectedMedicalAid} 
          updateItem={this.props.updateMedicalAid}
          hideForm={this.props.selectMedicalAid}
        />
      </React.Fragment>
    );

    const showListedItems = (
      <React.Fragment>
        <List>
          {medicalAidList.map(policy => {
            return (
              <ListItem
                key={policy.id}
                onClick={() => this.props.selectMedicalAid(policy)}
              >
                <ListItemText primary={policy.label} />
                <ListItemSecondaryAction>
                  <Button onClick={() => this.props.deleteMedicalAid(policy.id)} variant="contained" color="primary">
                    remove
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            )
          })}
        </List>

        <Button onClick={this.addMedicalAidPolicy} variant="contained" color="primary">
          Add new medical aid policy
        </Button>

      </React.Fragment>
    )

    return (
      <main>
        <Typography>Medical Aid</Typography>
        {selectedMedicalAid ? displaySelectedItem : showListedItems}
      </main>
    )
  }
}

export default connect(
  (state: any) => state.medicalAid,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(MedicalAid);