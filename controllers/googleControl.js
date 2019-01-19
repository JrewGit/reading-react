const axios = require("axios");
const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      ).then(booksApis =>
        db.Book.find().then(booksDbs =>
          booksApis.filter(booksApi =>
            booksDbs.every(booksDb => booksDb.googleId.toString() !== booksApi.id)
          )
        )
      ).then(books => res.json(books))
      .catch(err => res.json(err));
  }
};
