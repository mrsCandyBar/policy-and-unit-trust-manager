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

    return (
      <main>
        <Typography>
          Life Insurance Page
        </Typography>

        all life insurance policies

        {lifeInsuranceList.map(policy => {
          return (
            <React.Fragment>
              <Typography key={policy.id}>
                {policy.label}
              </Typography>

              <Button onClick={() => this.props.deleteLifeInsurance(policy.id)}>
                Remove
              </Button>
            </React.Fragment>
          )
        })}

        <Button onClick={this.addLifeInsurancePolicy}>
          Add Policy
        </Button>

      </main>
    )
  }
}

export default connect(
  (state: any) => state.lifeInsurance,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(LifeInsurance);