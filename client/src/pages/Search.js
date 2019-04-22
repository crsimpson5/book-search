import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import SearchCard from "../components/SearchCard";
import ResultsCard from "../components/ResultsCard";
import Navbar from "../components/Navbar";
import { Container } from "react-bootstrap";
import API from "../Utils/API";

class Search extends Component {
  state = {
    input: "",
    query: "",
    books: []
  }

  handleInputChange = event => {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    API.searchGB(this.state.input)
      .then(res => {
        let books = [];

        if (res.data.items) {
          res.data.items.forEach(book => {
            book = book.volumeInfo;
            
            books.push({
              title: book.title,
              authors: book.authors,
              description: book.description,
              image: book.imageLinks.thumbnail,
              link: book.infoLink
            });
          });
        }

        this.setState({ query: this.state.input }, () => {
          this.setState({
            input: "",
            books
          });
        })
      })
      .catch(err => console.log(err));
  };

  handleSave = event => {
    let idx = parseInt(event.target.getAttribute("data-idx"));
    
    API.saveBook(this.state.books[idx]);
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <Container>
          <Header />
          <SearchCard 
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            value={this.state.input}
          />
          <ResultsCard 
            books={this.state.books}
            query={this.state.query}
            handleSave={this.handleSave}
          />
        </Container>
      </Fragment>
    );
  }
};

export default Search;
