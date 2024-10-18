'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }

  /* Обмеження
    PRIMARY KEY - primaryKey
    UNIQUE - unique (constraint)
    CHECK - validate (validator)
    NOT NULL - allowNull (validator + constraint),
    FOREIGN KEY
    constraint - db
    validator - app
  */

  Phone.init(
    {
      model: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [2, 100],
        },
      },
      brand: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [2, 50],
        },
      },
      yearOfManufacture: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
          isBefore: new Date().toISOString(),
        },
      },
      ramSize: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          min: 2,
          max: 128,
        },
      },
      processor: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      screenSize: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          isFloat: true,
          min: 2.0,
          max: 10.0,
        },
      },
      hasNFC: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'has_nfc',
      },
    },
    {
      sequelize,
      modelName: 'Phone',
      underscored: true,
    }
  );
  return Phone;
};
