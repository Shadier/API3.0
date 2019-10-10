module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sponsor_sponsee', {
      sponsor_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        references: {
          model: 'users',
          key: 'id'
        },
      },
      sponsee_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        references: {
          model: 'sponsees',
          key: 'id'
        },
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sponsor_sponsee');
  }
};