import React, { useState, useEffect } from "react";
//import { Jumbotron, Container, Col, Row } from 'react-bootstrap';
import API from "../utils/API";
//import Searchbar from './Searchbar';
//import Results from '../components/Results';
//import Form from '../components/Form'; */

import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import BookTile from '../components/BookTile.js';
import { Container, Jumbotron, Form, Button, Spinner, Row, Col } from "react-bootstrap";

const Main = () => {

  // States
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [tiles, setTiles] = useState([]);
  // Handle Search
  const handleSubmit = () => {
    setLoading(true);
    /*         axios
              .get(
                `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&startIndex=1`
              ) */
    API.getBook(query)
      .then(res => {
        /*             if (startIndex >= res.data.totalItems || startIndex < 1) {
                      toast.error(
                        `max reults must be between 1 and ${res.data.totalItems}`
                      );
                    } else {
                      if (res.data.items.length > 0) { */
        setTiles(res.data.items);
        setLoading(false);
      })
      /*   }
      }) */
      .catch(err => {
        setLoading(true);
        console.log(err.response);
      });
  };

  // Main Show Case
  const mainHeader = () => {
    return (
      <Jumbotron>
        <Row>
          <Col md={3} />
          <Col md={6}>
            <Form>
              <Form.Group size='lg' className='mb-3'>
                <Form.Control
                  placeholder='Book Search'
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
                <Button color='secondary' onClick={handleSubmit}>
                  <i className='fas fa-search'></i>
                </Button>
              </Form.Group>
            </Form>
          </Col>
          <Col md={3} />
        </Row>
      </Jumbotron>

    );
  };

  const handleTiles = () => {
    /*       if (loading) {
            return (
              <div className='d-flex justify-content-center mt-3'>
                <Spinner style={{ width: '3rem', height: '3rem' }} />
              </div>
            );
          } else { */
    const items = tiles.map((item, i) => {
      let thumbnail = '';
      if (item.volumeInfo.imageLinks) {
        thumbnail = item.volumeInfo.imageLinks.thumbnail;
      }

      return (
<Row>
        <BookTile
          id={item.volumeInfo.id}
          thumbnail={thumbnail}
          title={item.volumeInfo.title}
          language={item.volumeInfo.language}
          authors={item.volumeInfo.authors}
          description={item.volumeInfo.description}
          infoLink={item.volumeInfo.infoLink}
        />
        </Row>
      );
    });
    return (
      <Row>{items}</Row>
    );
  };
  //};
  return (
    <div>
      {mainHeader()}
      <Container>
        {handleTiles()}
      </Container>
    </div>
  );
}


// Setting our component's initial state
//const [books, setBooks] = useState([]);
//const [formObject, setFormObject] = useState({})

// Load all books and store them with setBooks
/*    useEffect(() => {
    searchBook();
  }); */

/*   function bookData () {
    return {
        title: books.volumeInfo.title,
        authors: books.volumeInfo.authors,
        link: books.volumeInfo.infoLink,
        description: books.volumeInfo.description,
        image: books.volumeInfo.imageLinks.thumbnail,
        googleId: books.id
    } */

/*   // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  } */

/*  function searchBook (query) {
    API.getBook(query)
        .then(res => setBooks({ books: res.data.items.map(info => bookData(info)) }))
        .catch(err => console.error(err));
}; */

// Handles updating component state when the user types into the input field
/*   function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  }; */

// When the form is submitted, use the API.saveBook method to save the book data
// Then reload books from the database
/*   function handleFormSubmit(event) {
    event.preventDefault();
    searchBook();
  }; */

/*   return (
    <div>
      <Jumbotron>
        <Row>
          <Col md={3} />
          <Col md={6}>
            <Searchbar />
          </Col>
          <Col md={3} />
        </Row>
      </Jumbotron>
      <Container>
        <Results />
      </Container>
    </div>
  )
  } */

export default Main;
