import React, { useState } from 'react';
import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import API from '../../utils/API';
import './BookTile.css';

const BookTile = ({ id, title, thumbnail, authors, description, infoLink }) => {

     const [books, setBooks] = useState([]);
    
        const handleSave = () => {
           
            const bookData = { 'title': title, 
            'authors': authors, 
            'link': infoLink, 
            'description': description, 
            'image': infoLink, 
            'id': id }

            API.saveBook(bookData)
                .then(book => setBooks(books.push([book])))
                .catch(err => console.error(err));
        } 


    return (
        <div>
            <Card key={id} className='border rounded-sm my-3'>
                <Container className='p-3' style={{ width: 660, height: 'auto' }}>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img alt={title} src={thumbnail} href={infoLink}/>
                            </Card>
                        </Col>
                        <Col>
                            <Card.Body>
                                <h3>{title}</h3>
                                <h5> by {authors}</h5>
                                <p className='mt-3'>{description}</p>
                                <Button onclick={handleSave}>Save</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </div>
    )
}

export default BookTile;
