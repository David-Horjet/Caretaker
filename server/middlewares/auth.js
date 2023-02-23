const jwt = require("jsonwebtoken");
const loginRequired = async (req, res, next) => {
    const token = req.headers["authorization"].split(" ")[1]
    // console.log(token);
    if (!token) {
      return res.json({
        status: false,
        message: `You've got some errors`,
        error: "Token not found",
      });
    }
    jwt.verify(token, process.env.JWT, (err, data) => {
      if (err) {
        return res.json({
          status: false,
          message: `You've got some errors`,
          error: "Your token has expired, Please sign in again",
        });
      }
      req.user = data;
      return next();
    });
};

module.exports = { loginRequired };
