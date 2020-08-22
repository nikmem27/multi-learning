import React, { useState } from 'react';
import { Collapse, NavLink, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const Section = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => setCollapsed(!collapsed);

    return (
        <div>
            <NavItem onClick={toggle}>
                <NavLink className="dropdown-toggle"><span></span>Section {props.number}</NavLink>
            </NavItem>
            <Collapse
                isOpen={collapsed}
                navbar
                className="items-menu"
            >
                <NavItem>
                    <NavLink className="nav-link" tag={Link}><span className="fa fa-book fa-md"> Lesson</span></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" tag={Link}><span className="fa fa-calculator fa-md"> Test</span></NavLink>
                </NavItem>
            </Collapse>
        </div>
    );
};

export default Section;