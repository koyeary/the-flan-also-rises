import axios from "axios";

export default {
  getBook: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id).then(res => res.data);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData).then(res => res.data);
  },
  // Get the saved books from the database
  getSaved: function () {
    return axios.get("/api/books").then(res => res.data);
  }
};