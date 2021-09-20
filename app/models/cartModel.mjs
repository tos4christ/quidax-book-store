const cartModel = {};

cartModel.all = 'SELECT * FROM cart WHERE orderid=$1';

cartModel.add = 'INSERT INTO cart(qty, bookname, price, orderid, date, author) VALUES($1, $2, $3, $4, $5, $6) RETURNING *';

cartModel.update = 'UPDATE cart SET qty=$1 WHERE name=$2 AND orderid=$3 RETURNING *'




export default cartModel;
