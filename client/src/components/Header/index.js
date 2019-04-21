import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Header = props => {
  return (
    <Jumbotron fluid className="text-center">
      <Container>
        <h1>Google Books Search</h1>
        <p>Search for and Save Books of Interest</p>
      </Container>
    </Jumbotron>
  );
};

export default Header;
