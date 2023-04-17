"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class assetdisposal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      assetdisposal.belongsTo(models.asset, {
        foreignKey: "idAsset",
      });
    }
  }
  assetdisposal.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      assetCondition: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      disposalDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      disposalReason: {
        type: DataTypes.STRING,
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
      modelName: "assetdisposal",
    }
  );
  return assetdisposal;
};
