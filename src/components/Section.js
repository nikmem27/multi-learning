import React, { useState } from 'react';
import { Collapse, NavLink, NavItem } from 'reactstrap';


const Section = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => setCollapsed(!collapsed);

    return (
        <div>
            <NavItem onClick={toggle}>
                <NavLink className="dropdown-toggle"><span></span>Section 3</NavLink>
            </NavItem>
            <Collapse
                isOpen={collapsed}
                navbar
                className="items-menu"
            >
                <NavItem>
                    <NavLink className="nav-link"><span className="fa fa-book fa-md"> Lesson</span></NavLink>
                </NavItem>
                <NavItem>
                <NavLink className="nav-link"><span></span>Test</NavLink>
            </NavItem>
            </Collapse>
        </div>
    );
};

export default Section;