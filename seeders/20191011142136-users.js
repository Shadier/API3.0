'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      birth_date: new Date(),
      email: 'admin@casamata.com',
      first_name: 'Admin',
      id: '959cea6c-53c1-48e7-bee3-8e262f402d56',
      last_name: 'Admin',
      last_signed: new Date(),
      location_id: 'cec8fe56-43f8-4275-9ed1-94d5319e02a4',
      password: 'admin',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      birth_date: new Date(),
      email: 'teacher1@casamata.com',
      first_name: 'teacher1',
      id: '28a249ef-2dd5-4de5-9b9a-69c5c09c7e5b',
      last_name: 'teacher1',
      last_signed: new Date(),
      location_id: 'cec8fe56-43f8-4275-9ed1-94d5319e02a4',
      password: 'teacher',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      birth_date: new Date(),
      email: 'teacher2@casamata.com',
      first_name: 'teacher2',
      id: '29089782-97c8-4e8c-b2de-ccae6bbd1590',
      last_name: 'teacher2',
      last_signed: new Date(),
      location_id: 'cec8fe56-43f8-4275-9ed1-94d5319e02a4',
      password: 'teacher',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      birth_date: new Date(),
      email: 'teacher3@casamata.com',
      first_name: 'teacher3',
      id: 'e4dbab86-fc3d-4fb4-a6ea-790d2ba31bcd',
      last_name: 'teacher3',
      last_signed: new Date(),
      location_id: 'cec8fe56-43f8-4275-9ed1-94d5319e02a4',
      password: 'teacher',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      birth_date: new Date(),
      email: 'teacher4@casamata.com',
      first_name: 'teacher4',
      id: '887d5000-13bb-42d7-b7ff-32549b8cb1e8',
      last_name: 'teacher4',
      last_signed: new Date(),
      location_id: 'cec8fe56-43f8-4275-9ed1-94d5319e02a4',
      password: 'teacher',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      birth_date: new Date(),
      email: 'sponsor1@casamata.com',
      first_name: 'sponsor1',
      id: '7d719d33-dd73-49cb-95aa-f6bda6674dc7',
      last_name: 'sponsor1',
      last_signed: new Date(),
      location_id: 'cec8fe56-43f8-4275-9ed1-94d5319e02a4',
      password: 'sponsor',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      birth_date: new Date(),
      email: 'sponsor2@casamata.com',
      first_name: 'sponsor2',
      id: '0256f56b-5f39-4f33-8522-d907d7e70e33',
      last_name: 'sponsor2',
      last_signed: new Date(),
      location_id: 'cec8fe56-43f8-4275-9ed1-94d5319e02a4',
      password: 'sponsor',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      birth_date: new Date(),
      email: 'sponsor3@casamata.com',
      first_name: 'sponsor3',
      id: 'dfdb80fe-7ead-4817-955a-47ac60543c06',
      last_name: 'sponsor3',
      last_signed: new Date(),
      location_id: 'cec8fe56-43f8-4275-9ed1-94d5319e02a4',
      password: 'sponsor',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      birth_date: new Date(),
      email: 'sponsor4@casamata.com',
      first_name: 'sponsor4',
      id: '6a268b73-e9b3-4f4f-8a36-fb0effb3fc56',
      last_name: 'sponsor4',
      last_signed: new Date(),
      location_id: 'cec8fe56-43f8-4275-9ed1-94d5319e02a4',
      password: 'sponsor',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
