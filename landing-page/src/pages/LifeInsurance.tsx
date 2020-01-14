import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, LifeInsuranceStoreState, ILifeInsuranceStoreState } from '../stores/lifeInsuranceStore';
import { Button, Typography, List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import CustomForm from '../components/form/customForm';

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
      lifeInsuranceList: nextProps.lifeInsuranceList,
      selectedLifeInsurance: nextProps.selectedLifeInsurance
    }
    return newState;
  }

  constructor(props: ILifeInsuranceProps) {
    super(props);
    this.state = {
      classes: this.props.classes,
      lifeInsuranceList: this.props.lifeInsuranceList,
      selectedLifeInsurance: this.props.selectedLifeInsurance
    }
  }

  public componentDidMount() {
    this.initialiseDataSet();
  }

  public initialiseDataSet() {
    this.props.getLifeInsuranceList();
  }

  public addLifeInsurancePolicy = () => {
    this.props.addLifeInsurance();
  }

  render() {
    const { lifeInsuranceList, selectedLifeInsurance } = this.state;

    const displaySelectedItem = (
      <React.Fragment>
        <Button onClick={() => this.props.selectLifeInsurance()} variant="contained" color="primary"> go back </Button>
        <CustomForm 
          selectedObject={selectedLifeInsurance} 
          updateItem={this.props.updateLifeInsurance}
          hideForm={this.props.selectLifeInsurance}
        />
      </React.Fragment>
    );

    const showListedItems = (
      <React.Fragment>
        <List>
          {lifeInsuranceList.map(policy => {
            return (
              <ListItem
                key={policy.id}
                onClick={() => this.props.selectLifeInsurance(policy)}
              >
                <ListItemText primary={policy.label} />
                <ListItemSecondaryAction>
                  <Button onClick={() => this.props.deleteLifeInsurance(policy.id)} variant="contained" color="primary">
                    remove
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            )
          })}
        </List>

        <Button onClick={this.addLifeInsurancePolicy} variant="contained" color="primary">
          Add new life insurance policy
        </Button>
      </React.Fragment>
    )

    return (
      <main>
        <Typography>Life Insurance</Typography>
        {selectedLifeInsurance ? displaySelectedItem : showListedItems}
      </main>
    )
  }
}

export default connect(
  (state: any) => state.lifeInsurance,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(LifeInsurance);