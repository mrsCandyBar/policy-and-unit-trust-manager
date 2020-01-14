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
      unitTrustList: nextProps.unitTrustList,
      selectedUnitTrust: nextProps.selectedUnitTrust
    }
    return newState;
  }

  constructor(props: IUnitTrustProps) {
    super(props);
    this.state = {
      classes: this.props.classes,
      unitTrustList: this.props.unitTrustList,
      selectedUnitTrust: this.props.selectedUnitTrust
    }
  }

  public componentDidMount() {
    this.initialiseDataSet();
  }

  public initialiseDataSet() {
    this.props.getUnitTrustList();
  }

  public addUnitTrust = () => {
    this.props.addUnitTrust();
  }

  render() {
    const { unitTrustList, selectedUnitTrust } = this.state;

    return (
      <main>
        <Typography>
          Unit Trust Page
        </Typography>

        all unit trusts

        {unitTrustList.map((unitTrust, index) => {
          return (
            <React.Fragment>
              <Typography key={index}>
                {unitTrust.label}
              </Typography>

              <Button onClick={() => this.props.deleteUnitTrust(unitTrust.id)}>
                Remove
              </Button>
            </React.Fragment>
          )
        })}

        <Button onClick={this.addUnitTrust}>
          Add new unit trust
        </Button>

      </main>
    )
  }
}

export default connect(
  (state: any) => state.unitTrust,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(UnitTrust);