import React, { Component } from 'react';
import { 
    Profile, 
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
                <Route exact path="/" component={Profile} />
                <Route path="/lifeInsurance/:id?" component={LifeInsurance} />
                <Route path="/unitTrust/:id?" component={UnitTrust} />
                <Route path="/medicalAid/:id?" component={MedicalAid} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default Routes;