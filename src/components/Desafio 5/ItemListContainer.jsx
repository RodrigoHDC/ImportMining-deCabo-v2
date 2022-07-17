import Item from "./ItemList";
import Data from "./Item";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const Render  = () => {
    const [items, setItems] = useState([]);
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve(Data), 2000);
      });

    useEffect(() => {
        promise.then((res) => {
        setItems(Data);},[])
        })

    return (
        <Container>
            <Row lg={4} className="mx-auto my-auto">
            {items.map((item) => (
                <>
                <Item key={`item-${item.id}`}/>
                <Col className='mt-5'>
                <Card style={{ width: '16rem' }}>
                <Card.Img variant="top mx-auto" src={item.img} style={{width: "10rem"}} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>USD {item.price}</Card.Text>
                    <Button variant="primary">Ver Detalles</Button>
                    <hr />
                    <Card.Text>Stock Disponible: {item.stock}</Card.Text>
                </Card.Body>
                </Card>
                </Col>
                </>
                ))}
            </Row>
        </Container>
    )
}

export default Render;