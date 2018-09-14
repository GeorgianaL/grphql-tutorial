import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

class BookList extends Component {

  displayBooks() {
      const { data } = this.props;
      if (data.loading) {
        return (<h3>Loading books...</h3>)
      } else {
        return data.books.map((book) => {
          return (
            <li key={book.id}>{book.name}</li>
          );
        })
      }
  }

  render() {
    return (
      <ul id="book-list">
        { this.displayBooks() }
      </ul>
    );
  }
}

export default graphql(getBooksQuery)(BookList);