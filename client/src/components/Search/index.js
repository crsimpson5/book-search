import React, { Fragment } from "react";
import Header from "../Header";
import SearchCard from "../SearchCard";
import ResultsCard from "../ResultsCard";
import Navbar from "../Navbar";
import { Container } from "react-bootstrap";

const Search = props => {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <Header />
        <SearchCard />
        <ResultsCard />
      </Container>
    </Fragment>
  );
};

export default Search;
