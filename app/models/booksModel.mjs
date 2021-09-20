const booksModel = {};

booksModel.featured = 'SELECT * FROM books WHERE tag=$1 LIMIT 2';

booksModel.all = 'SELECT * FROM books ORDER BY id';

booksModel.one = 'SELECT * FROM books WHERE id=$1';

booksModel.rate = 'UPDATE books SET rating=$1 WHERE id=$2 RETURNING *';

booksModel.rating = 'SELECT rating FROM books WHERE id=$1';

booksModel.like = 'UPDATE books SET likecount=$1 WHERE id=$2 RETURNING *';

booksModel.getlikes = 'SELECT likecount FROM books WHERE id=$1';

export default booksModel;
