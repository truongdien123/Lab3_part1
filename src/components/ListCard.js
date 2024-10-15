
import { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';

const ProductList = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('https://api-demo-4gqb.onrender.com/products');
            const result = await response.json();
            setProducts(result.data); 
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
      
        fetchProducts();
      }, []);

    return (
        <Row>
        {products.map((product) => (
            <Col key={product.id} md={4}>
                <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
                </Card.Text>
                <Card.Text>
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.salePrice)}
        </Card.Text>
                <Button variant="primary" onClick={() => props.addToCart(product.title)}>Buy</Button>
            </Card.Body>
        </Card>
            </Col>
        ))}
    </Row>
    );
};

export default ProductList;
