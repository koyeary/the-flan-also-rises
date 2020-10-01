import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { FormGroup } from 'react-bootstrap'

function Search() {
  // Setting our component's initial state
  const [book, setBook] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
/*   useEffect(() => {
    loadBooks()
  }, [] */

  // Loads all books and sets them to books
  function setBook(query) {
    API.getBook(query)
      .then(res => 
        setBook({
          title: res.volumeInfo.title,
          authors: res.volumeInfo.authors,
          link: res.volumeInfo.infoLink,
          description: res.volumeInfo.description,
          image: res.volumeInfo.imageLinks.thumbnail,
          googleId: res.id
        })
      )
      .catch(err => console.log(err));
  };


/*   // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  } */

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        link: book.volumeInfo.infoLink,
        sdescription: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.thumbnail,
        googleId: book.id
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Google Books Search</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author"
              />
              <FormBtn
                disabled={!(formObject.author || formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Books;
