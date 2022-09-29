const usersTable = require("../models").users;

const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const oldUser = await usersTable.findOne({
      where: { username: username, password: password },
    });
    if (oldUser) {
      throw "User already exists";
    } else {
      const newUser = await usersTable.create({
        username,
        password,
      });
      res.status(200).send({
        status: 200,
        message: "User registered successfully",
        data: newUser,
      });
    }
  } catch (error) {
    res.status(401).send({ status: 401, message: error });
  }
};

module.exports = {
  createUser,
};
