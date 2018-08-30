import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Navbar,  Modal, Button } from 'react-bootstrap';

class Navigation extends Component {

    state = {
        show: false
    }

    handleShow=()=> {
        this.setState({ show: true });
      }
    
      handleHide=()=> {
        this.setState({ show: false });
      }
    


    render() {
        return (
            <section className="section-navigation">
             <div  >MODAL</div>
                <Navbar className="navbar" fixedTop>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="nav-main" pullRight>
                            <NavItem >
                                <Link to="/onama">
                                    O nama
                        </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/">
                                    Home
                        </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/kontakt">
                                    Kontakt
                        </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/reference">
                                    Reference
                        </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/proizvodi">
                                    Proizvodi
                        </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/mojbroj">
                                    MojBroj
                        </Link>
                            </NavItem>
                            <NavItem>
                              <i onClick={this.handleShow} className="fas fa-search fa-lg"></i>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>    
                <Modal
          {...this.props} 
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
             Title modalov
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Ovo je modal</h4>
            <p>
              Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
              unde commodi aspernatur enim, consectetur. Cumque deleniti
              temporibus ipsam atque a dolores quisquam quisquam adipisci
              possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
              quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide} className="btn" bsSize="sm" bsStyle="danger">Close</Button>
          </Modal.Footer>
        </Modal>
            </section>
        );
    }
}

export default Navigation;