import pool from '../models/db-connection.mjs';
import booksModel from '../models/booksModel.mjs';

const booksController = {};
// TODO -- Ensure to validate data inputs

// Controller query for 20 featured books
booksController.featured = (req, res) => {
  // query the database for the 20 featured books and display result with 15-pages pagination
  pool.query(booksModel.featured, ['featured'])
    .then((featuredBooks) => {
      res.status(200).json({
        status: 'Success',
        data: {
          message: 'featured books successfully fetched',
          featuredBooks: featuredBooks.rows
        }
      });
    });
};

// Controller query for all books
booksController.all = (req, res) => {
  // query the database for the 20 featured books and display result with 15-pages pagination
  pool.query(booksModel.all)
    .then((books) => {
      res.status(200).json({
        status: 'Success',
        data: {
          message: 'all books successfully fetched',
          books: books.rows
        }
      });
    });
};

// Controller query for one books details
booksController.one = (req, res) => {
  const { bookid } = req.params;
  // query the database for the 20 featured books and display result with 15-pages pagination
  pool.query(booksModel.one, [bookid])
    .then((book) => {
      res.status(200).json({
        status: 'Success',
        data: {
          message: 'book successfully fetched',
          book: book.rows
        }
      });
    });
};

// Controller query for one books details
booksController.rate = (req, res) => {
  const { bookid } = req.params;
  const { rating } = req.query;
  // query the database for the 20 featured books and display result with 15-pages pagination
  pool.query(booksModel.rating, [bookid])
    .then((dbRating) => {
      const newRating = Math.floor((Number(rating) + dbRating.rows[0].rating)/2);
      pool.query(booksModel.rate, [newRating, bookid])
        .then((book) => {
          res.status(200).json({
            status: 'Success',
            data: {
              message: 'book rating successfully updated',
              book: book.rows[0]
            }
          });
        });
    });
};

// Controller query for one books details
booksController.rating = (req, res) => {
  const {bookid} = req.params;
  // query the database for the 20 featured books and display result with 15-pages pagination
  pool.query(booksModel.rating, [bookid])
    .then((book) => {
      res.status(200).json({
        status: 'Success',
        data: {
          message: 'book rating successfully fetched',
          book: book.rows
        }
      });
    });
};

// Controller query for one books details
booksController.like = (req, res) => {
  const { bookid } = req.params;
  const { vote } = req.query;
  // query the database for the 20 featured books and display result with 15-pages pagination
  pool.query(booksModel.getlikes, [bookid])
    .then((booklikes) => {
      const updatedlikes = (vote.toLowerCase() == 'up' ? 1 : vote.toLowerCase() == 'down' ? -1 : null) + booklikes.rows[0].likecount;
      pool.query(booksModel.like, [updatedlikes < 0 ? 0 : updatedlikes, bookid])
        .then((book) => {
          res.status(201).json({
            status: 'Success',
            data: {
              message: 'book likes successfully updated',
              book: book.rows
            }
          });
        });
    });
};

// Controller query for one books details
booksController.search = (req, res) => {
  const queryObject = req.query;
  const columnName = Object.keys(queryObject)[0];
  const patternName = queryObject[Object.keys(queryObject)[0]];
  const queried = `SELECT * FROM books WHERE ${columnName} LIKE '${patternName}' LIMIT 10`
  // query the database for the 20 featured books and display result with 15-pages pagination
  pool.query(queried)
    .then((books) => {
      res.status(200).json({
        status: 'Success',
        data: {
          message: 'book search successfully',
          books: books.rows
        }
      });
    });
};

export default booksController;
