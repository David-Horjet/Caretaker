const { Users } = require("../model/userModel");

const { validatePassword } = require("../../utils/auth");

const { generateHashed } = require("../../utils/auth");

const updatePassword = async (req, res) => {

  try {
    const body = req.body;
    if (!body.currentPassword || !body.newPassword) {
      return res.json({
        status: false,
        message: `Password Unpdate Information Required`,
        error,
      });
    }
    const userPassword = await Users.findById(userId._id);
    const checkPassword = validatePassword(
      body.newPassword,
      userPassword.password
    );
    if (!checkPassword) {
      return res.json({
        status: false,
        message: `Inavlid Password, Provide a new one`,
        error,
      });
    }
    userPassword.password = generateHashed(body.newPassword);
    await userPassword.save();
    return res.status(201).json({
      status: true,
      message: "Password Update Successful",
      userPassword,
    });
  } catch (error) {
    return res.json({
      status: false,
      message: `You've got some errors`,
      error,
    });
  }
};

module.exports = {
  updatePassword,
};
