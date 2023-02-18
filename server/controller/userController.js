const Users = require("../model/userModel");

const allUsers = async (req, res) => {
  try {
    const data = await Users.find();
    return res.json({
      status: true,
      message: "user details available here",
      data,
    });

  } catch (error) {
    return res.json({
      status: false,
      message: `An error occured while fetching users`,
      error,
    });
  }
}

const singleUser = async (req, res) => {
  try {
    const data = await Users.findById(req.user.userId);
    return res.json({
      status: true,
      message: "user details available here",
      data,
    });

  } catch (error) {
    return res.json({
      status: false,
      message: `You've got some errors`,
      error,
    });
  }
}




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
  allUsers,
  updatePassword,
  singleUser
};
