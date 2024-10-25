'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Preorder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }

  Preorder.init(
    {
      orderDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
          isBefore: new Date(Date.now() + 86400000).toISOString(), // Кількість мілісекунд
        },
      },
      status: {
        type: DataTypes.ENUM('pending', 'confirmed', 'done'),
        allowNull: false,
        defaultValue: 'pending',
      },
      phoneQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          min: 1,
        },
      },
      customerPhoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[0-9+]{10,13}$/,
        },
      },
    },
    {
      sequelize,
      modelName: 'Preorder',
      underscored: true,
    }
  );

  return Preorder;
};
