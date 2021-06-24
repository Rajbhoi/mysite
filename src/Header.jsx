import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Image src="https://images.unsplash.com/photo-1512626120412-faf41adb4874?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" thumbnail />
                </Col>
                <Col xs={6} md={4}>

                </Col>
            </Row>
        </Container>
    )
};

export default Header;