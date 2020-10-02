import React, { useState } from 'react';
import { Form, Button, ButtonGroup } from 'react-bootstrap';
import API from "../utils/API";


function Searchbar() {

    //const [search, setSearch] = useState({});
    const [formObject, setFormObject] = useState({});
    const [books, setBooks] = useState([]);

    function searchResult(bookData) {
        return {
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink
        }
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        API.getBook(formObject)
            .then(res => 
                setBooks({ books: res.data.items.map(bookData => searchResult(bookData))})
            )
            .catch(err => console.log(err));
      };

      function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    return (

                <Form>
                    <Form.Group>
                        <Form.Control type='text' placeholder='Search books' onChange={handleInputChange}/>
                        <ButtonGroup className='mx-auto'>
                            <Button onClick={() => handleFormSubmit} type="submit" className="btn btn-default">Author Search</Button>
                            <Button onClick={() => handleFormSubmit}  type="submit" className="btn btn-default">Title Search</Button>
                        </ButtonGroup>
                    </Form.Group>
                </Form>
        
    );

}

export default Searchbar;