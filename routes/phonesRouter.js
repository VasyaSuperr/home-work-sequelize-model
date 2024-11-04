const { Router } = require('express');
const { phonesController } = require('../controllers');
const { validate, paginate } = require('../middleware');

const phonesRouter = Router();

phonesRouter
  .route('/')
  .post(validate.validationOnCreate, phonesController.createPhone)
  .get(paginate.paginatePhones, phonesController.getPhones);

phonesRouter
  .route('/:phoneId')
  .get(phonesController.getPhoneById)
  .patch(validate.validationOnUpdate, phonesController.updatePhoneById)
  .delete(phonesController.deletePhoneById);

phonesRouter
  .route('/:phoneId/preorders')
  .get(phonesController.getPhonesPreorders);

module.exports = phonesRouter;
