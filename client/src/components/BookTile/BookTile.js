import React, { useState } from 'react';
import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import API from '../../utils/API';
import './BookTile.css';

const BookTile = ({ id, title, thumbnail, authors, description, infoLink, deleteButton }) => {


    const handleSave = () => {
        API.saveBook({
            'title': title,
            'authors': authors,
            'link': infoLink,
            'description': description,
            'image': thumbnail
        })
            .then(alert(`${title} saved!`))
            .catch(err => console.error(err));
    }

    const handleDelete = () => {
        API.deleteBook(id)
            .then(alert(`${title} has been removed`))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Card key={id} className='border rounded-sm my-3'>
                <Container className='p-3' style={{ width: 660, height: 'auto' }}>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img alt={title} src={thumbnail} href={infoLink} />
                            </Card>
                        </Col>
                        <Col>
                            <Card.Body>
                                <h3>{title}</h3>
                                <h5> by {authors}</h5>
                                <p className='mt-3'>{description}</p>
                                {deleteButton
                                ? <Button onClick={handleDelete}>Delete</Button>
                                : <Button onClick={handleSave}>Save</Button>
                            }
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </div>
    )
}

export default BookTile;
