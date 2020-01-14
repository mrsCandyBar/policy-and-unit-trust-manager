import React, { Component } from 'react';
import { 
    App, 
    About, 
    Contact, 
    NotFound 
} from '../pages';
import { Route, Switch } from 'react-router-dom';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about/:id" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default Routes;