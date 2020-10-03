import React, { useState, useEffect } from "react";
import API from "../utils/API";
import BookTile from '../components/BookTile/BookTile.js';
import { Container,
  Row, 
  Col } from "react-bootstrap";

const Saved = () => {
    const [tiles, setTiles] = useState([]);

    useEffect(() => {
        loadBooks();
    });

      // Handle Search
  const loadBooks = () => {
    API.getSaved()
      .then(res => {
        setTiles(res.data.items);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  //Construct book tiles
  const handleTiles = () => {
    const items = tiles.map((item, i) => {
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
      <Container>
        <Col />
        <Col md={6}>{handleTiles()}</Col>
        <Col />
      </Container>
    </div>
  );
}

export default Saved;