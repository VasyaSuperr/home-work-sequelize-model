const createHttpError = require('http-errors');
const {
  CREATE_PHONE_VALIDATION_SCHEMA,
  UPDATE_PHONE_VALIDATION_SCHEMA,
} = require('../utils/validatedSchemas');

module.exports.validationOnCreate = async (req, res, next) => {
  const { body } = req;

  try {
    const validetedPhone = await CREATE_PHONE_VALIDATION_SCHEMA.validate(body);
    console.log(validetedPhone);
    req.body = validetedPhone;
    next();
  } catch (error) {
    next(createHttpError(422, error));
  }
};

module.exports.validationOnUpdate = async (req, res, next) => {
  const { body } = req;

  try {
    const validetedPhone = await UPDATE_PHONE_VALIDATION_SCHEMA.validate(body);
    req.body = validetedPhone;
    next();
  } catch (error) {
    next(createHttpError(422, error));
  }
};
