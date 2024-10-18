const yup = require('yup');

const phoneValidationRules = {
  model: yup.string().min(2).max(100),
  brand: yup.string().min(2).max(50),
  yearOfManufacture: yup.date().max(new Date()),
  ramSize: yup.number().integer().min(2).max(128).integer(),
  processor: yup.string().max(100),
  screenSize: yup.number().min(2).max(10),
  hasNFC: yup.boolean(),
};

module.exports.CREATE_PHONE_VALIDATION_SCHEMA = yup.object({
  ...phoneValidationRules,
  model: phoneValidationRules.model.required(),
  brand: phoneValidationRules.brand.required(),
  yearOfManufacture: phoneValidationRules.yearOfManufacture.required(),
  ramSize: phoneValidationRules.ramSize.required(),
  processor: phoneValidationRules.processor.required(),
  screenSize: phoneValidationRules.screenSize.required(),
  hasNFC: phoneValidationRules.hasNFC,
});

module.exports.UPDATE_PHONE_VALIDATION_SCHEMA = yup.object({
  ...phoneValidationRules,
});

module.exports.PAGE_VALIDATION_SCHEMA = yup.number().min(1).integer();
module.exports.RESULTS_VALIDATION_SCHEMA = yup
  .number()
  .min(2)
  .max(50)
  .integer();
