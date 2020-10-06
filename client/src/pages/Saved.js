import React, { useState, useEffect } from "react";
import API from "../utils/API";
import BookTile from '../components/BookTile/BookTile.js';
import {
  Jumbotron,
  Container,
  Row,
  Col
} from "react-bootstrap";

const Saved = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  });

  // Handle Search
  const loadBooks = () => {
    API.getSaved()
      .then(res => {
        setBooks(books.push(res.data.items));
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const handleDelete = (id) => {
    API.deleteBook(id).then(loadBooks()).catch(err => console.error(err));
  }

  //Construct book tiles
  const handleTiles = () => {
    const items = books.map((item, i) => {
      let thumbnail = '';
      if (item.volumeInfo.imageLinks) {
        thumbnail = item.volumeInfo.imageLinks.thumbnail;
      }

      return (
<Row>
          <BookTile
            key={item.volumeInfo.id}
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

    return (
      <div>
        <Jumbotron>
          <Row>
            <Col md={3} />
            <Col md={6} className='text-center'>
              <h1>My Library</h1>
            </Col>
            <Col md={3} />
          </Row>
        </Jumbotron>
        <div>
          <Container>
            <Col />
            <Col md={6}>{handleTiles()}</Col>
            <Col />
          </Container>
        </div>
      </div>
    );
  }

  export default Saved;