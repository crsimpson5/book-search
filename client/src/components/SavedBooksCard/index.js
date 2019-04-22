import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import API from "../../Utils/API";

class SavedBooksCard extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    API.getBooks()
      .then(res => {
        this.setState({
          books: res.data
        });
      });
  }

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Saved Books</Card.Title>
            {this.state.books.map((book, index) => {
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
                        <Button variant="primary" className="ml-1" data-idx={index} >Remove</Button>
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
  }
};

export default SavedBooksCard;
