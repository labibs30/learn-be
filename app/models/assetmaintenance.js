"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class assetmaintenance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      assetmaintenance.belongsTo(models.asset, {
        foreignKey: "idAsset",
      });
    }
  }
  assetmaintenance.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idAsset: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      finishDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maintenanceType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "assetmaintenance",
    }
  );
  return assetmaintenance;
};
