import React from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";

const SearchCard = props => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Book Search</Card.Title>
        <Form onSubmit={props.handleSubmit}>
          <Row noGutters>
            <Col lg={11}>
              <Form.Group controlId="formSearch">
                <Form.Control 
                  type="text" 
                  placeholder="Enter book title"
                  name="input"
                  value={props.value}
                  onChange={props.handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col lg={1}>
              <Button 
                variant="primary" 
                type="submit"
              >
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
