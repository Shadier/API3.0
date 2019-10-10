'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_role', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      role_id: {
        primaryKey: true,
        type: Sequelize.UUID,
      },
      user_id: {
        primaryKey: true,
        type: Sequelize.UUID,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_role');
  }
};