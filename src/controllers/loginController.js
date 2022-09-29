const usersTable = require("../models").users;

const userLogin = async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;

    const oldUser = await usersTable.findOne({
      where: { username: username, password: password },
    });

    if (oldUser) {
      res.status(200).send({
        status: 200,
        message: "User succesfully Logged In.",
        data: oldUser,
      });
    } else {
      res.status(400).send({
        status: 400,
        message: "User not found, Please signup.",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  userLogin,
};
