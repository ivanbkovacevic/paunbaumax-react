import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Navbar, Image } from 'react-bootstrap';

class Navigation extends Component {

    render() {
        return (
            <div>
                <Navbar>
        
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem >
                                <Link to="/onama">
                                    O NAMA
                        </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/">
                                    HOME
                        </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/kontakt">
                                    KONTAKT
                        </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/reference">
                                    REFERENCE
                        </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/proizvodi">
                                    PROIZVODI
                        </Link>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;