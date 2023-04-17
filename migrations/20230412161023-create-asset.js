"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Assets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idFiscalType: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "FiscalTypes",
          key: "id",
          onDelete:"CASCADE",
          onUpdate:"CASCADE"
        },
      },
      name: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
      },
      fiscalType: {
        type: Sequelize.STRING,
      },
      supplierName: {
        type: Sequelize.STRING,
      },
      supplierAddress: {
        type: Sequelize.STRING,
      },
      assetType: {
        type: Sequelize.BOOLEAN,
      },
      address: {
        type: Sequelize.STRING,
      },
      department: {
        type: Sequelize.STRING,
      },
      estimatedLife: {
        type: Sequelize.INTEGER,
      },
      purchaseDate: {
        type: Sequelize.DATE,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      assetAccount: {
        type: Sequelize.STRING,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      residualValue: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Assets");
  },
};
