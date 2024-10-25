'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('preorders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      order_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('pending', 'confirmed', 'done'),
        allowNull: false,
        defaultValue: 'pending',
      },
      phone_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      customer_phone_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'phones',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint('preorders', {
      fields: ['order_date'],
      type: 'check',
      where: {
        order_date: {
          [Sequelize.Op.lte]: Sequelize.literal(
            "CURRENT_DATE + INTERVAL '1 day'"
          ),
        },
      },
    });

    await queryInterface.addConstraint('preorders', {
      fields: ['phone_quantity'],
      type: 'check',
      where: {
        phone_quantity: {
          [Sequelize.Op.gt]: 0,
        },
      },
    });

    await queryInterface.addConstraint('preorders', {
      fields: ['customer_phone_number'],
      type: 'check',
      where: {
        customer_phone_number: {
          [Sequelize.Op.regexp]: '^(?:\\+38(0)?|0)[0-9]{9}$',
        },
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('preorders');
  },
};
