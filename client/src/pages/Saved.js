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
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    loadBooks();
  });

  // Handle Search
  const loadBooks = () => {
    API.getSaved()
      .then(res => {
        setTiles(res);
      })
      .catch(err => {
        console.log(err.response);
      });
  };


  //Construct book tiles
  const handleTiles = () => {
    const items = tiles.map((item, i) => {
      let thumbnail = '';
      if (item.image) {
        thumbnail = item.image;
      }

      return (
        <Row>
          <BookTile
            key={item.id}
            thumbnail={thumbnail}
            title={item.title}
            language={item.language}
            authors={item.authors}
            description={item.description}
            infoLink={item.infoLink}
            deleteButton={true}
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
        <Col md={3} />
        <Col md={6} className='mx-auto'>{handleTiles()}</Col>
        <Col md={3} />
        </Container>
      </div>
    </div>
  );
}

export default Saved;