import React, { Component } from 'react';
import { set, split } from 'lodash';
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
    set(updateSelectedObject, thisProperty.name, (thisProperty.type === "date" || thisProperty.type === "month") ? event.target.value : thisProperty.value);
    this.setState({
      selectedObject: updateSelectedObject
    })
  }

  private dontShowProperty = (property: string) => {
    return (property === 'id' || property === 'actionType');
  }

  public mapProperty = (obj: any, nestedName?: string) => {
    const mapAllProperties: any = Object.keys(obj).map((propertyName: any, index: number) => {
      const canShowPropertyValue:boolean = !this.dontShowProperty(propertyName);
      if (canShowPropertyValue) {
        const isObj = typeof (obj[propertyName]) == 'object';
        const splitByMonth = split(propertyName.toLowerCase(), 'month');
        const splitByDate = split(propertyName.toLowerCase(), 'date');
        const splitByDay = split(propertyName.toLowerCase(), 'day');
        const isDateObj = splitByMonth.length > 1 || splitByDate.length > 1 || splitByDay.length > 1;

        return (isObj || isDateObj) ? (
          isDateObj ?
            this.presentObj(obj, propertyName, splitByMonth.length > 1 ? 'month' : 'date', nestedName) :
            this.mapProperty(obj[propertyName], propertyName)
        ) : this.presentObj(obj, propertyName, typeof (obj[propertyName]), nestedName)
      }

      return false;
    });

    return mapAllProperties;
  }

  public presentObj = (obj: any, propertyName: string, type: string, nestedName?: string) => {
    return (
      <Grid container key={`${propertyName}_${obj.id}`}>
        <Grid item xs={3}>
          {nestedName ? `${nestedName} ${propertyName}` : propertyName}:
        </Grid>
        <Grid item xs={9}>
          {(type === 'month' || type === 'date') ? (
            <TextField
              name={nestedName ? `${nestedName}.${propertyName}` : propertyName}
              value={obj[propertyName]}
              type={type === 'month' ? 'month' : 'date'}
              onChange={this.onChange}
            />
          ) : (
              <TextField
                name={nestedName ? `${nestedName}.${propertyName}` : propertyName}
                value={obj[propertyName]}
                type={typeof (obj[propertyName])}
                onChange={this.onChange}
              />
            )
          }
        </Grid>
      </Grid>
    )
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