import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Navigation extends Component {
    state = {}
    render() {
        return (<nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">WebSiteName</a>
                </div>
                <ul className="nav navbar-nav">
                   <NavLink to="/"> Home </NavLink>
                   <NavLink  to="/about"> About </NavLink>
                </ul>
            </div>
        </nav>);
    }
}

export default Navigation;