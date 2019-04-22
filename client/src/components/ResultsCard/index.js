import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./style.css";

const ResultsCard = props => {
  return (
    <Card className="mb-5">
      <Card.Body>
        <Card.Title>Results {props.query ? `for "${props.query}"` : ""}</Card.Title>
          {props.books.map((book, index) => {
            return (
              <Card key={`book-${index}`}>
                <Card.Header></Card.Header>
                <Card.Body>
                  <Row noGutters>
                    <Col lg={10}>
                      <Card.Title>{book.title}</Card.Title>
                      <p>By {book.authors ? book.authors.join(", ") : "unknown"}</p>
                    </Col>
                    <Col lg={2} className="text-right">
                      <Button variant="primary" href={book.link} target="_blank">View</Button>
                      <Button variant="primary" className="ml-1" data-idx={index} onClick={props.handleSave}>Save</Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={2}>
                      <img className="book-img" src={book.image} alt="book cover" 
                      />
                    </Col>
                    <Col lg={9}>
                      <div className="description">{book.description}</div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            );
          })}
      </Card.Body>
    </Card>
  );
};

export default ResultsCard;
