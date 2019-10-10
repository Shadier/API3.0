'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sponsor_sponsee', {
      sponsee_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        references:{
          model:'sponsees',
          key:'id'
        },
      },
      sponsor_id: {
        allowNull: false,
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
    return queryInterface.dropTable('sponsor_sponsee');
  }
};