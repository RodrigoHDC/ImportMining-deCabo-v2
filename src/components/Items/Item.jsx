import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useContext } from "react";
import { useCartContext } from "../../context/CartContext";


const Item = ({ item }) => {
  const { id, category, title, description, price, stock, img } = item;

  const nombre = useContext(useCartContext);

  return (
    <Container>
        <Row lg={4} className="mx-auto my-auto">
            <>
            <Col className='mt-5'>
            <Card style={{ width: '16rem' }}>
            <Card.Img variant="top mx-auto" src={img} style={{width: "10rem"}} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>USD {price}</Card.Text>
                <Link to={`item/${id}`}>
                  <Button variant="primary">Ver Detalles</Button>
                </Link>               
                <hr/>
                <Card.Text>Stock Disponible: {stock}</Card.Text>
            </Card.Body>
            </Card>
            </Col>
            </>
        </Row>
    </Container>
  )
}

export default Item;