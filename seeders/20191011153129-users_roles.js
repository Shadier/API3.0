'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_role', [{
      user_id: '959cea6c-53c1-48e7-bee3-8e262f402d56',
      role_id: '2e6465e3-fbd4-4c8e-85ff-5eff9863429f',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      role_id: 'f6b0d437-f459-4678-a66a-64e33c4663b5',
      user_id: '28a249ef-2dd5-4de5-9b9a-69c5c09c7e5b',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      role_id: 'f6b0d437-f459-4678-a66a-64e33c4663b5',
      user_id: '29089782-97c8-4e8c-b2de-ccae6bbd1590',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      role_id: 'f6b0d437-f459-4678-a66a-64e33c4663b5',
      user_id: 'e4dbab86-fc3d-4fb4-a6ea-790d2ba31bcd',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      role_id: 'f6b0d437-f459-4678-a66a-64e33c4663b5',
      user_id: '887d5000-13bb-42d7-b7ff-32549b8cb1e8',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      role_id: '2f51cf15-7c19-4e13-8c52-09550cf0277c',
      user_id: '7d719d33-dd73-49cb-95aa-f6bda6674dc7',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      role_id:'2f51cf15-7c19-4e13-8c52-09550cf0277c',
      user_id: '0256f56b-5f39-4f33-8522-d907d7e70e33',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      role_id:'2f51cf15-7c19-4e13-8c52-09550cf0277c',
      user_id: 'dfdb80fe-7ead-4817-955a-47ac60543c06',
     created_at: new Date(),
      updated_at: new Date()
    }, {
      role_id:'2f51cf15-7c19-4e13-8c52-09550cf0277c',
      user_id: '6a268b73-e9b3-4f4f-8a36-fb0effb3fc56',
      created_at: new Date(),
      updated_at: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_role', null, {});
  }
};
