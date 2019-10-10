'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('group_user', {
      group_id: {
        primaryKey: true,
        type: Sequelize.UUID,
        references:{
          model:'groups',
          key:'id'
        },
      },
      user_id: {
       primaryKey: true,
        type: Sequelize.UUID,
        references:{
          model:'users',
          key:'id'
        },
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('group_user');
  }
};