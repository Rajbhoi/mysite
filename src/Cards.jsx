import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const Cards = (props) => {
    const { gridSection } = props
    return (
        <Row>
            {
                gridSection && gridSection.map((card) => {
                    // console.log(card)
                    const { title, subTitle } = card
                    return (
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1623851807421-02b352e60381?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>
                                        {subTitle}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )

                }
                )
            }
        </Row >
    )


};

export default Cards;


{/* <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1623851807421-02b352e60381?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card> */}