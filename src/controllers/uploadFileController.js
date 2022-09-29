const jsonFileTable = require("../models").json_files;
const base64json = require("base64json");

const uploadJsonFile = async (req, res) => {
  try {
    const requestPayload = {
      encrypted_json: req.body.encrypted_json,
    };

    const base64File = await jsonFileTable.create(requestPayload);
    res
      .status(200)
      .send({
        status: 200,
        message: "JSON data uploaded to database succesfully",
        data: base64File,
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllJsonData = async (req, res) => {
  try {
    const jsonData = await jsonFileTable.findAll({});
    let finalArray = [];
    jsonData.map((item) => {
      let decoded = base64json.parse(item.encrypted_json);
      decoded.map((item2) => {
        finalArray.push(item2);
      });
    });
    res.status(200).send(finalArray);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  uploadJsonFile,
  getAllJsonData,
};
