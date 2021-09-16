import jwt from 'jsonwebtoken';

// supply user token from the client to the function to get the user details encoded in it.
const userToken = (token) => {
  const toker = jwt.verify(token, process.env.TOKENKEY, (err, tokens) => {
    if (err) throw err;
    return tokens;
  });
  return toker;
};

export default userToken;
