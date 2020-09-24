import React, { Component } from 'react';
import { Nav, NavLink, NavItem } from 'reactstrap';

import Section from './Section'

class Sidebar extends Component {
    
    render() {
        return (
            <div className={"sidebar " + (this.props.isOpen ? "is-open" : "")}>
                <div className="side-menu">
                    <Nav vertical className="list-unstyled pb-3">
                        <Section number={1}/>
                        <Section number={2}/>
                        <Section number={3}/>
                        <Section number={4}/>
                        <Section number={5}/>
                        <Section number={6}/>
                        <Section number={7}/>
                        <Section number={8}/>
                        <Section number={9}/>
                        <Section number={10}/>
                    </Nav>
                </div>
            </div>
        );
    }
}

export default Sidebar;