'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('preorders', [
      {
        order_date: new Date(),
        status: 'confirmed',
        phone_quantity: 2,
        customer_phone_number: '+380123456789',
        phone_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_date: new Date(),
        status: 'pending',
        phone_quantity: 1,
        customer_phone_number: '+380987654321',
        phone_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_date: new Date(),
        status: 'done',
        phone_quantity: 3,
        customer_phone_number: '+380555555555',
        phone_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('preorders', null, {});
  },
};
