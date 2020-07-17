import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"sidebar "+ (this.props.isOpen ? "is-open" : "")}>
                <NavbarToggler>
                    <Nav vertical>
                        <NavItem>
                            <NavLink className="nav-link" to='/singup'><span className="fa fa-user-plus fa-lg"></span>Singup</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/login'><span className="fa fa-sign-in fa-lg"></span>Login</NavLink>
                        </NavItem>
                    </Nav>
                </NavbarToggler>
            </div>
        );
    }
}

export default Header;