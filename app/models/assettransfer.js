"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class assetTransfer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      assetTransfer.belongsTo(models.asset, {
        foreignKey: "idAsset",
      });
    }
  }
  assetTransfer.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idAsset: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      initialAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      destinationAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      initialDepartment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      destinationDepartment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transferMethod: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "assetTransfer",
    }
  );
  return assetTransfer;
};
