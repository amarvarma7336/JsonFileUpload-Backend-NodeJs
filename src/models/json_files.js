"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class json_files extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  json_files.init(
    {
      encrypted_json: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "json_files",
    }
  );
  return json_files;
};
