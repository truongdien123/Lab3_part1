import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Container, Row, Navbar, NavDropdown, Form, Nav, Carousel, Col, Badge} from 'react-bootstrap';
import pizza1 from './image/pizza1.jpg';
import pizza2 from './image/pizza2.jpg';
import pizza3 from './image/pizza3.jpg';
import menu1 from './image/menu1.jpg';
import menu2 from './image/menu2.jpg';
import menu3 from './image/menu3.jpg';
import menu4 from './image/menu4.jpg';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function App() {


  const [cart, setCart] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[item]) {
        newCart[item] += 1;
      } else {
        newCart[item] = 1;
      }
      return newCart;
    });
  };

  const updateCartItem = (item, action) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (action === 'increase') {
        newCart[item] += 1;
      } else if (action === 'decrease' && newCart[item] > 1) {
        newCart[item] -= 1;
      } else {
        delete newCart[item];
      }
      return newCart;
    });
  };

  const cartItemCount = Object.values(cart).reduce((acc, count) => acc + count, 0);

  return (
    <Container>
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
          <Button variant="primary" onClick={() => setIsModalOpen(true)} className='mx-2'>
      Items: <Badge bg="secondary">{cartItemCount}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
    
    <Row>
    <Carousel>
      <Carousel.Item>
        <img src={pizza1}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={pizza2}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={pizza3}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Row>
    <Row className='mt-2'>
      <h1>Our menu</h1>
    </Row>
    <Row className='mt-2'>
      <Col>
      <Card>
      <Card.Img variant="top" src={menu1} />
      <Card.Body>
        <Card.Title>Card Title 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={() => addToCart('Card Title 1')} variant="primary">Buy</Button>
      </Card.Body>
    </Card>
      </Col>
      <Col>
      <Card>
      <Card.Img variant="top" src={menu2} />
      <Card.Body>
        <Card.Title>Card Title 2</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={() => addToCart('Card Title 2')} variant="primary">Buy</Button>
      </Card.Body>
    </Card>
      </Col>
      <Col>
      <Card>
      <Card.Img variant="top" src={menu3} />
      <Card.Body>
        <Card.Title>Card Title 3</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={() => addToCart('Card Title 3')} variant="primary">Buy</Button>
      </Card.Body>
    </Card>
      </Col>
      <Col>
      <Card>
      <Card.Img variant="top" src={menu4} />
      <Card.Body>
        <Card.Title>Card Title 4</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={() => addToCart('Card Title 4')} variant="primary">Buy</Button>
      </Card.Body>
    </Card>
      </Col>
      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Using grid in Modal</Modal.Title>
        </Modal.Header>
        {Object.keys(cart).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {Object.keys(cart).map((item) => (
            <li key={item}>
              {item} - Quantity: {cart[item]}
              <button onClick={() => updateCartItem(item, 'increase')}>+</button>
              <button onClick={() => updateCartItem(item, 'decrease')}>-</button>
            </li>
          ))}
        </ul>
      )}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
    </Container>
    
  );
}

export default App;
