import React, { useState } from 'react';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import BookTile from '../components/BookTile/BookTile.js';
import {
  Container,
  Jumbotron,
  Form,
  Button,
  Row,
  Col
} from 'react-bootstrap';

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
      <Jumbotron className='text-center'>
        <Row>
          <Col md={3} />
          <Col md={6}>
            <div>
              <h1>(React) Google Book Search</h1>
              <h4>Search and save books to your personal library.</h4>
            </div>
            <Form className='mt-5'>
              <Form.Group size='lg' className='mb-3'>
                <Form.Control
                  placeholder='Book Search'
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
                  <Button className='mt-3' color='secondary' onClick={handleSubmit}>
                    Search
                </Button>
                <div className='mt-3'>
                  <Link to='/saved'><h5>Go to my library.</h5></Link>
                </div>
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
            deleteButton={false}
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
        <Col md={3} />
        <Col md={6} className='mx-auto'>{handleTiles()}</Col>
        <Col md={3} />
      </Container>
    </div>
  );
}


export default Main;
