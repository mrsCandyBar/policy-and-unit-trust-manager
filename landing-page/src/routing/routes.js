import React, { Component } from 'react';
import { 
    LifeInsurance, 
    UnitTrust,
    MedicalAid,
    Contact, 
    NotFound 
} from '../pages';
import { Route, Switch } from 'react-router-dom';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LifeInsurance} />
                <Route path="/lifeInsurance" component={LifeInsurance} />
                <Route path="/unitTrust" component={UnitTrust} />
                <Route path="/medicalAid" component={MedicalAid} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default Routes;