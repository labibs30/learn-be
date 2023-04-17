'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('assetTransfers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      idAsset: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      initialAddress: {
        type: Sequelize.STRING
      },
      destinationAddress: {
        type: Sequelize.STRING
      },
      initialDepartment: {
        type: Sequelize.STRING
      },
      destinationDepartment: {
        type: Sequelize.STRING
      },
      transferMethod: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('assetTransfers');
  }
};