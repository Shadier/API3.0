module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('groups', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
      },
      location_id: {
        type: Sequelize.UUID,
        references: {
          model: 'locations',
          key: 'id'
        },
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL',
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
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
    return queryInterface.dropTable('groups');
  }
};