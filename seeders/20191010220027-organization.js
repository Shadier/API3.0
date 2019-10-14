'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('organizations', [{
      id:'8956263e-33dd-4aed-92a2-5d39e2929866',
      description: 'Casa muy bonita en Guatemala',
      name:'Casa Guatemala',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('organizations', null, {});
  }
};
