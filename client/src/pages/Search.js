import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Form from '../components/Form';

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
   useEffect(() => {
    bookSearch();
  });

  function bookData () {
    return {
      title: books.volumeInfo.title,
        authors: books.volumeInfo.authors,
        link: books.volumeInfo.infoLink,
        description: books.volumeInfo.description,
        image: books.volumeInfo.imageLinks.thumbnail,
        googleId: books.id
    }
  }
/*   // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  } */

 function searchBook (query) {
    API.getBook(query)
        .then(res => setBooks({ books: res.data.items.map(info => bookData(info)) }))
        .catch(err => console.error(err));
};

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    searchBook();
  };

    return (
        <div>
            <div className='form'>
              <Form.Input
              handleInputChange={handleInputChange}
            />
              <Form.Button handleFormSubmit={handleFormSubmit}/>
            </div>
            <div className="container">
                <h2>Results</h2>
                <Results books={books} />
            </div>
        </div>
    )
}

export default Search;
