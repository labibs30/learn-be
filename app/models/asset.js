"use strict";
const { Model, INTEGER } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Asset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Asset.belongsTo(models.FiscalType, {
        foreignKey: "idFiscalType",
      });
      Asset.hasOne(models.assetTransfer, {
        foreignKey: "idAsset",
      });
      Asset.hasOne(models.assetmaintenance, {
        foreignKey: "idAsset",
      });
      Asset.hasOne(models.assetdisposal, {
        foreignKey: "idAsset",
      });
    }
  }
  Asset.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fiscalType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      supplierName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      supplierAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      assetType: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estimatedLife: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      purchaseDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      assetAccount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      residualValue: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      idFiscalType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "asset",
      timestamps: true,
    }
  );
  return Asset;
};
