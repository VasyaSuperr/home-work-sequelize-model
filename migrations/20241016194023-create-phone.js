'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      model: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      brand: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      year_of_manufacture: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      ram_size: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      processor: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      screen_size: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      has_nfc: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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

    await queryInterface.addConstraint('phones', {
      fields: ['model'],
      type: 'check',
      where: Sequelize.literal(
        'CHAR_LENGTH(model) >= 2 AND CHAR_LENGTH(model) <= 100'
      ),
    });

    await queryInterface.addConstraint('phones', {
      fields: ['brand'],
      type: 'check',
      where: Sequelize.literal(
        'CHAR_LENGTH(brand) >= 2 AND CHAR_LENGTH(brand) <= 50'
      ),
    });

    await queryInterface.addConstraint('phones', {
      fields: ['year_of_manufacture'],
      type: 'check',
      where: {
        year_of_manufacture: {
          [Sequelize.Op.lte]: Sequelize.literal('CURRENT_DATE'),
        },
      },
    });

    await queryInterface.addConstraint('phones', {
      fields: ['ram_size'],
      type: 'check',
      where: { ram_size: { [Sequelize.Op.between]: [2, 128] } },
    });

    await queryInterface.addConstraint('phones', {
      fields: ['screen_size'],
      type: 'check',
      where: { screen_size: { [Sequelize.Op.between]: [2.0, 10.0] } },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('phones');
  },
};
