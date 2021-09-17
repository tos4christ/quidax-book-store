const cartModel = {};

cartModel.all = 'SELECT * FROM cart WHERE orderid=$1';

cartModel.add = 'INSERT INTO cart(qty, name, price, orderid, date) VALUES($1, $2, $3, $4, $5) RETURNING *';

cartModel.update = 'UPDATE cart SET qty=$1, item-id=$2 WHERE id=$3 AND order_id=$4 RETURNING *'




export default cartModel;
