import React, { useState } from "react";
import { Badge, Container, Form, Nav, Navbar, Row, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from "./Login";
import { useAuth } from "../contexts/AuthContext";

const Header = (props) => {
  const { user } = useAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
    return (
        <Row><Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Pizza House</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About us</Nav.Link>
            <Nav.Link href="#" disabled>
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Button variant="primary" onClick={() => props.onCartClick()} className='mx-2'>
      Items: <Badge bg="secondary">{props.cartItemCount}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
    <Button variant="primary" onClick={handleShowLogin}
    
    >
    {user.username ? (  // Check if username is available
                    <span>{user.username}</span>
                ) : (
                    <span>
                        <i className="bi bi-person-circle"></i> {/* Your icon here */}
                    </span>
                )}
      </Button>
      <Login 
      showLogin={showLogin}
      show={handleShowLogin}
      close={handleCloseLogin}
      />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </Row>
    )
}

export default Header;