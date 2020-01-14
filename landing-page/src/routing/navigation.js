import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationMenu extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Your Profile</Link></li>
                <li><Link to="/lifeInsurance">Life Insurance</Link></li>
                <li><Link to="/unitTrust">Unit Trust</Link></li>
                <li><Link to="/medicalAid">Medical Aid</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        )
    }
}

export default NavigationMenu;