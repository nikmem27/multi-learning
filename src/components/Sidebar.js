import React, { Component } from 'react';
import { Nav, NavLink, NavItem } from 'reactstrap';

import Section from './Section'

class Header extends Component {
    render() {
        return (
            <div className={"sidebar " + (this.props.isOpen ? "is-open" : "")}>
                <div className="side-menu">
                    <Nav vertical className="list-unstyled pb-3">
                        <NavItem>
                            <NavLink className="nav-link"><span className="fa fa-user-plus fa-lg"></span>Singup</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"><span className="fa fa-sign-in fa-lg"></span>Login</NavLink>
                        </NavItem>
                        <Section/>
                    </Nav>
                </div>
            </div>
        );
    }
}

export default Header;