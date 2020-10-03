import React, { useState, useEffect } from "react";
import API from "../utils/API";
import BookTile from '../components/BookTile/BookTile.js';
import { Container, 
  Jumbotron, 
  Form, 
  Button, 
  Row, 
  Col } from "react-bootstrap";

const Main = () => {

  // States
  const [query, setQuery] = useState('');
  const [tiles, setTiles] = useState([]);


  // Handle Search
  const handleSubmit = () => {
    API.getBook(query)
      .then(res => {

        setTiles(res.data.items);
      })
      .catch(err => {
        console.log(err.response);
      });
  };


  // Searchbar
  const searchBar = () => {
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
                <Button className='mt-3' color='secondary' onClick={handleSubmit}>
                  Search
                </Button>
              </Form.Group>
            </Form>
          </Col>
          <Col md={3} />
        </Row>
      </Jumbotron>

    );
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
      {searchBar()}
      <Container>
        <Col />
        <Col md={6}>{handleTiles()}</Col>
        <Col />
      </Container>
    </div>
  );
}


export default Main;
