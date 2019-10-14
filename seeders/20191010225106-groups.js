'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('groups', [{
      id: 'c728a06d-2062-4fce-bfb9-08022d5d5a10',
      name: 'Grupo A',
      location_id: 'cec8fe56-43f8-4275-9ed1-94d5319e02a4',
      created_at: new Date(),
      updated_at: new Date()
    },{
      id: '37fefba6-0c40-4bc1-b508-80d5b25806f2',
      name: 'Grupo B',
      location_id: 'cec8fe56-43f8-4275-9ed1-94d5319e02a4',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('groups', null, {});
  }
};
