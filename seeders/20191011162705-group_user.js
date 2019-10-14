'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('group_user', [{
      group_id: 'c728a06d-2062-4fce-bfb9-08022d5d5a10',
      user_id: '28a249ef-2dd5-4de5-9b9a-69c5c09c7e5b',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      group_id: 'c728a06d-2062-4fce-bfb9-08022d5d5a10',
      user_id: '29089782-97c8-4e8c-b2de-ccae6bbd1590',
      created_at: new Date(),
      updated_at: new Date()
    },{
      group_id: '37fefba6-0c40-4bc1-b508-80d5b25806f2',
      user_id: 'e4dbab86-fc3d-4fb4-a6ea-790d2ba31bcd',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      group_id: '37fefba6-0c40-4bc1-b508-80d5b25806f2',
      user_id: '887d5000-13bb-42d7-b7ff-32549b8cb1e8',
      created_at: new Date(),
      updated_at: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('group_user', null, {});
  }
};
