const { Router } = require('express');
const { phonesController } = require('../controllers');
const { validate } = require('../middleware');

const phonesRouter = Router();

phonesRouter
  .route('/')
  .post(validate.validationOnCreate, phonesController.createPhone)
  .get(phonesController.getPhones);

phonesRouter
  .route('/:phoneId')
  .get(phonesController.getPhoneById)
  .patch(validate.validationOnUpdate, phonesController.updatePhoneById)
  .delete(phonesController.deletePhoneById);

module.exports = phonesRouter;
