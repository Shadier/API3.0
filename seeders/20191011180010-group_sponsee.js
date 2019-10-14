'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('group_sponsee', [{
      group_id: 'c728a06d-2062-4fce-bfb9-08022d5d5a10',
      sponsee_id: '5f7c1c98-b90f-4418-afc4-abbf70191703',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      group_id: 'c728a06d-2062-4fce-bfb9-08022d5d5a10',
      sponsee_id: '16c3f219-fbe5-4c4c-bbb2-52cc15960519',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      group_id: 'c728a06d-2062-4fce-bfb9-08022d5d5a10',
      sponsee_id: '198849e5-7976-4cc9-b77b-0ee47077e62c',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      group_id: 'c728a06d-2062-4fce-bfb9-08022d5d5a10',
      sponsee_id: '0c1a78b7-efac-477c-8c1b-fbb9929ab253',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      group_id: 'c728a06d-2062-4fce-bfb9-08022d5d5a10',
      sponsee_id: '81667c4b-ec2d-49b2-9c48-2b2b71314964',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      group_id: '37fefba6-0c40-4bc1-b508-80d5b25806f2',
      sponsee_id: 'b9d4924b-27dc-4ab3-98e9-e072b5d287c3',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      group_id: '37fefba6-0c40-4bc1-b508-80d5b25806f2',
      sponsee_id: '4b8fe90b-ef16-46d4-b5e0-6ab012727ccf',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      group_id: '37fefba6-0c40-4bc1-b508-80d5b25806f2',
      sponsee_id: '1e63c830-de4d-4495-918b-8acbb9ddc9a6',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      group_id: '37fefba6-0c40-4bc1-b508-80d5b25806f2',
      sponsee_id: '54fcb667-723b-4f77-bc9d-d19035c5b646',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      group_id: '37fefba6-0c40-4bc1-b508-80d5b25806f2',
      sponsee_id: 'a7bff6d4-98d3-49dc-9ff5-135734d2c822',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('group_sponsee', null, {});
  }
};
