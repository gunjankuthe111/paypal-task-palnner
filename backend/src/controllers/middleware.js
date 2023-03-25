const jwt = require("jsonwebtoken");
const JWTSECTET = process.env.JWTSECTET;

const middleware = async (req, res, next) => {
  const {token} = req.headers;

  if (!token) {
    return res.status(400).send({message: "token not found"});
  }

  try {
    const varify = jwt.verify(token, JWTSECTET);
    if (varify.email) {
      req.userEmail = varify.email;
      req.id = varify.id;
      req.name = varify.name;
      next();
    } else {
      return res.status(401).send({message: "Invalid token"});
    }
  } catch (e) {
    res.status(400).send({message: "Token not valid login again"});
  }
};
module.exports = middleware;
