import { gql } from 'apollo-boost';

/*
  QUERY
  getting all books from db
  retrieve their name and ids
*/
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

/*
  QUERY
  getting all authors from db
  retrieve their name and ids
*/
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

/*
  MUTATION
  adding a book requires the name, genre and authorId
*/
const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

/*
  QUERY
  getting information about a book requires its ID
  retrieve its id, name, genre, author and also all of the other books that author has written
*/
const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export { getBooksQuery, getAuthorsQuery, addBookMutation, getBookQuery };
