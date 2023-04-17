"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class assetrevaluation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      assetrevaluation.belongsTo(models.asset, {
        foreignKey: "idAsset",
      });
    }
  }
  assetrevaluation.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      idAsset: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "assetrevaluation",
    }
  );
  return assetrevaluation;
};
