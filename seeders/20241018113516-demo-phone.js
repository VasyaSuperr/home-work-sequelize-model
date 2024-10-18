'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'phones',
      [
        {
          model: 'iPhone 15',
          brand: 'Apple',
          year_of_manufacture: '2023-09-16',
          ram_size: 8,
          processor: 'A16 Bionic',
          screen_size: 6.1,
          has_nfc: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('phones', null, {});
  },
};
