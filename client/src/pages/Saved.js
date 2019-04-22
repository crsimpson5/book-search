import React, { Fragment } from "react";
import Header from "../components/Header";
import SavedBooksCard from "../components/SavedBooksCard";
import Navbar from "../components/Navbar";
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
