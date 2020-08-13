import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className={"sidebar " + (this.props.isOpen ? "is-open" : "")}>
                <div className="side-menu">
                    <Nav>
                        <Nav vertical>
                            <NavItem>
                                <NavLink className="nav-link" to='/singup'><span className="fa fa-user-plus fa-lg"></span>Singup</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/login'><span className="fa fa-sign-in fa-lg"></span>Login</NavLink>
                            </NavItem>
                        </Nav>
                    </Nav>
                </div>
            </div>
        );
    }
}

export default Header;