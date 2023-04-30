import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import imgFirst from '../../../assets/1.png';
import imgSecond from '../../../assets/2.png';
import imgThird from '../../../assets/3.png';

const EditorsInsights = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4 mt-4">
            <Col>
                <Card>
                    <Card.Img variant="top" src={imgFirst} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card>
                    <Card.Img variant="top" src={imgSecond} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card>
                    <Card.Img variant="top" src={imgThird} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default EditorsInsights;