import userModel from '../models/userModel.mjs';

// sos controller would only insert the location and userID to the database
// the remaining work is done on socket.io
const userController = (req, res) => {
  userModel.list()
    .then((users) => {
      res.status(201).send({ users });
    });
};

export default userController;
