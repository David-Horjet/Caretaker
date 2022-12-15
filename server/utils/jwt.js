const jwt = require("jsonwebtoken");
const generateAccessToken = (id) => {
  return jwt.sign(id, process.env.JWT, {
    expiresIn: "365d",
  });
};
module.exports = {
  generateAccessToken,
};
