'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [{
      id: '2e6465e3-fbd4-4c8e-85ff-5eff9863429f',
      name: 'Admin',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      id: 'f6b0d437-f459-4678-a66a-64e33c4663b5',
      name: 'Teacher',
      created_at: new Date(),
      updated_at: new Date()
    },{
      id: '2f51cf15-7c19-4e13-8c52-09550cf0277c',
      name: 'Sponsor',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
