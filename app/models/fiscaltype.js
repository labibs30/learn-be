"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FiscalType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FiscalType.hasOne(models.asset, {
        foreignKey: "idFiscalType",
      });
    }
  }
  FiscalType.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estimatedLife: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      depreciationMethod: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      depreciationRate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "FiscalType",
      timestamps: true,
    }
  );
  return FiscalType;
};
