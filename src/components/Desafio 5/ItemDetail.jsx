import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const { id, category, title, description, price, stock, img, color, ROI} = item;

  return (
    <>
    <Container>
      <Row>

        <Col>
         <Card.Img variant="top mx-auto" src={img} style={{width: "30rem"}} />
        </Col>

        <Col xs={6}  className='mt-5'>
          <Card.Title>{title}</Card.Title>
          <hr />
          <Card.Text>{category}</Card.Text>
          <hr />
          <Card.Text>{description}</Card.Text>
          <hr />
          <Card.Text>{color}</Card.Text>
          <hr />
          <Card.Text>{ROI}</Card.Text>
          <hr />
          <Card.Text>USD {price}</Card.Text>
          <hr />
          <Card.Text>Stock Disponible: {stock}</Card.Text>
        </Col>

      </Row>
    </Container>
    </>
  );
}

export default ItemDetail;