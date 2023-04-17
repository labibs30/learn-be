'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('assetdisposals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      assetCondition: {
        type: Sequelize.STRING
      },
      disposalDate: {
        type: Sequelize.DATE
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      disposalReason: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      idAsset: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('assetdisposals');
  }
};