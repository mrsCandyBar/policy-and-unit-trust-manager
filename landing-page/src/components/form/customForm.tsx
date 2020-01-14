import React, { Component } from 'react';
import { set, isDate } from 'lodash';
import { Button, withStyles, Grid, TextField } from '@material-ui/core';

const useStyles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '0 30px',
  },
};

interface ICustomFormProps {
  classes: any;
  updateItem(event: any): void;
  hideForm(event?: any): void;
  selectedObject: any;
}

interface ICustomFormState {
  classes: any;
  selectedObject: any;
}

class CustomForm extends Component<ICustomFormProps, ICustomFormState> {
  constructor(props: ICustomFormProps) {
    super(props);
    this.state = {
      classes: this.props.classes,
      selectedObject: this.props.selectedObject
    }
  }

  private updateAndClose = () => {
    this.props.updateItem(this.state.selectedObject);
    this.props.hideForm();
  }

  private onChange = (event: any) => {
    const thisProperty = event && event.currentTarget;
    let updateSelectedObject: any = this.state.selectedObject;
    set(updateSelectedObject, thisProperty.name, thisProperty.value);
    this.setState({
      selectedObject: updateSelectedObject
    })
  }

  public mapProperty = (obj: any) => {
      const mapAllProperties:any = Object.keys(obj).map((propertyName: any, index: number) => {
        return typeof (obj[propertyName]) == 'object' ? (
          isDate(obj[propertyName]) ? (
            <Grid container key={index}>
              <Grid item xs={3}>
                {propertyName}:
            </Grid>
              <Grid item xs={9}>
                <TextField
                  name={propertyName}
                  value={obj[propertyName]}
                  type={propertyName.indexOf('month') ? 'month' : 'date'}
                  onChange={this.onChange}
                />
              </Grid>
            </Grid>
          ) : this.mapProperty(obj[propertyName])
        ) : (
            <Grid container key={index}>
              <Grid item xs={3}>
                {propertyName}:
              </Grid>
              <Grid item xs={9}>
                <TextField
                  name={propertyName}
                  value={obj[propertyName]}
                  type={typeof (obj[propertyName])}
                  onChange={this.onChange}
                />
              </Grid>
            </Grid>
          )
      });

      return mapAllProperties;
  }

  render() {
    const { selectedObject } = this.props;
    return (
      <Grid container alignContent="center" alignItems="center" justify="center" >

        <Grid item xs={12}>
          Custom Form
          {this.mapProperty(selectedObject)}
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={3}>&nbsp;</Grid>
            <Grid item xs={9}>
              <Button onClick={this.updateAndClose}> update </Button>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    )
  }
}

export default withStyles(useStyles)(CustomForm);