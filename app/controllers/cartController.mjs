import pool from '../models/db-connection.mjs';
import cartModel from '../models/cartModel.mjs';

// sos controller would only insert the location and userID to the database
// the remaining work is done on socket.io
const cartController = {};

cartController.total = (req, res) => {
  const { orderid } = req.query;
  pool.query(cartModel.all, [orderid])
    .then((cart) => {
      const sub_total = cart.rows.reduce((acc, curr) => {
        return acc + (curr.price * curr.qty);
      }, 0)
      res.status(200).json({
        status: 'Success',
        data: {
          message: 'cart successfully fetched',
          cart: cart.rows,
          sub_total
        }
      });
    });
};

cartController.add = (req, res) => {
  const {qty, name, price, orderid} = req.body;
  pool.query(cartModel.add, [qty, name, price, orderid, new Date])
    .then((cart) => {
      res.status(201).json({
        status: 'Success',
        data: {
          message: 'item added to cart successfully',
          cart: cart.rows
        }
      });
    });
};

cartController.update = (req, res) => {
  cartModel.list()
    .then((cart) => {
      res.status(201).send({ cart });
    });
};

export default cartController;
