'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('locations', [{
      id: 'cec8fe56-43f8-4275-9ed1-94d5319e02a4',
      name: 'Casa Guatemala',
      organization_id:'8956263e-33dd-4aed-92a2-5d39e2929866',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('locations', null, {});
  }
};
