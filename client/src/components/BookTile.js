import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
//import API from '../utils/API';

const BookTile = ({ id, title, thumbnail, authors, description, infoLink }) => {

/*     const [books, setBooks] = useState([]);

    useEffect(() => {
        API.savedBooks()
            .then(saved => setBooks(saved))
            .catch(err => console.error(err));
    });

    function handleSave(book) {
        if (books.map(book => book._id).includes(book._id)) {
            //delete
        } else {
            API.saveBook(book)
                .then(book => setBooks(books.push([book])))
                .catch(err => console.error(err));
        }
    } */


    return (
        <div>
{/*             {!books.length ? (
                <h1 className='text-center'>No Results to Display</h1>
            ) : (
                    <div>
                        {books.map(res => ( */}
                            <Row>
                               <Card key={id}>
                              
                                    <Col>
                                        <img alt={title} className='img-fluid' src={thumbnail} />
                                    </Col>
                                    <Col>
                                        <Card.Body>
                                            <Card.Title>{title} by {authors}</Card.Title>
                                            <Card.Text>{description}</Card.Text>
                                        </Card.Body>
                                        <Button href={infoLink}>View</Button>
                                        {/* <Button onClick={handleSave}>Save</Button> */}
                                        <Button>Save</Button>
                                    </Col>

                                </Card>
                            </Row>
{/*                         ))}
                    </div>
                )} */}
        </div>
    )
}

export default BookTile;
