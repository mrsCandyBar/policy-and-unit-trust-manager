import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, UnitTrustStoreState, IUnitTrustStoreState } from '../stores/unitTrustStore';
import { Button, Typography, List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import CustomForm from '../components/form/customForm';

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

    const displaySelectedItem = (
      <React.Fragment>
        Hello
        <Button onClick={() => this.props.selectUnitTrust()}> go back </Button>
        <CustomForm 
          selectedObject={selectedUnitTrust} 
          updateItem={this.props.updateUnitTrust}
          hideForm={this.props.selectUnitTrust}
        />
      </React.Fragment>
    );

    const showListedItems = (
      <React.Fragment>
        <Typography>all unit trusts</Typography>
        <List>
          {unitTrustList.map(unitTrust => {
            return (
              <ListItem
                key={unitTrust.id}
                onClick={() => this.props.selectUnitTrust(unitTrust)}
              >
                <ListItemText primary={unitTrust.title} />
                <ListItemSecondaryAction>
                  <Button onClick={() => this.props.deleteUnitTrust(unitTrust.id)}>
                    remove
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            )
          })}
        </List>

        <Button onClick={this.addUnitTrust}>
          Add new unit trust
        </Button>
      </React.Fragment>
    )

    return (
      <main>
        <Typography>Unit Trust Page</Typography>
        {selectedUnitTrust ? displaySelectedItem : showListedItems}
      </main>
    )
  }
}

export default connect(
  (state: any) => state.unitTrust,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(UnitTrust);