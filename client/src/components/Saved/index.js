import React, { Fragment } from "react";
import Header from "../Header";
import SavedBooksCard from "../SavedBooksCard";
import Navbar from "../Navbar";
import { Container } from "react-bootstrap";

const Saved = props => {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <Header />
        <SavedBooksCard />
      </Container>
    </Fragment>
  );
};

export default Saved;
