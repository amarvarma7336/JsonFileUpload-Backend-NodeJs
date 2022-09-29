const router = require("express").Router();
const registerUserController = require("../controllers/registerUser");
const loginController = require("../controllers/loginController");
const uploadFileController = require("../controllers/uploadFileController");

// login route

router.post("/login", loginController.userLogin);

// create user

router.post("/create-user", registerUserController.createUser);

// upload json file

router.post("/upload-json-file", uploadFileController.uploadJsonFile);
router.get("/get-json-data", uploadFileController.getAllJsonData);

module.exports = router;
