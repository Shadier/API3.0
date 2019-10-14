'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_role', {
      role_id: {
        primaryKey: true,
        type: Sequelize.UUID,
        references: {
          model: 'roles',
          key: 'id'
        },
      },
      user_id: {
        primaryKey: true,
        type: Sequelize.UUID,
        references: {
          model: 'users',
          key: 'id'
        },
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_role');
  }
};