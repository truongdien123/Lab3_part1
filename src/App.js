import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Carousel } from 'react-bootstrap';
import pizza1 from './image/pizza1.jpg';
import pizza2 from './image/pizza2.jpg';
import pizza3 from './image/pizza3.jpg';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Header from './components/Header';
import { AuthProvider } from './contexts/AuthContext';
import ProductList from './components/ListCard';


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
    <AuthProvider>
    <Container>
      <Header
        cartItemCount={cartItemCount}
        onCartClick={() => setIsModalOpen(true)} // Opens the modal when cart icon is clicked
      />

      <Row>
        <Carousel>
          <Carousel.Item>
            <img src={pizza1} alt="Pizza 1" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={pizza2} alt="Pizza 2" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={pizza3} alt="Pizza 3" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>

      <Row className="mt-2">
        <h1>Our menu</h1>
      </Row>
      
      <ProductList addToCart={addToCart}/>

      <Row className="mt-2">
        <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Your Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
    </AuthProvider>
  );
}

export default App;
