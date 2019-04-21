import React from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";

const SearchCard = props => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Book Search</Card.Title>
        <Form>
          <Row noGutters>
            <Col lg={11}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Col>
            <Col lg={1}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SearchCard
