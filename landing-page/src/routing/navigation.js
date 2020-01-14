import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationMenu extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/id">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        )
    }
}

export default NavigationMenu;