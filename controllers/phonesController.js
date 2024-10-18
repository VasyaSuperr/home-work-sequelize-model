const _ = require('lodash');
const { Phone } = require('./../models');
const createHttpError = require('http-errors');
const { where } = require('sequelize');

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;

  try {
    const createdPhone = await Phone.create(body);

    const preparedPhone = _.omit(createdPhone.get(), [
      'updatedAt',
      'createdAt',
    ]);

    res.status(201).send({ data: preparedPhone });
  } catch (error) {
    next(error);
  }
};

module.exports.getPhones = async (req, res, next) => {
  const { page, results } = req.query;

  const limit = results;
  const offset = results * (page - 1);

  try {
    const foundPhones = await Phone.findAll({
      attributes: { exclude: ['updatedAt', 'createdAt'] },
      limit,
      offset,
      order: ['id'],
      raw: true,
    });

    res.status(200).send({ data: foundPhones });
  } catch (error) {
    next(error);
  }
};

module.exports.getPhoneById = async (req, res, next) => {
  const { phoneId } = req.params;

  try {
    const foundPhone = await Phone.findByPk(phoneId, {
      attributes: { exclude: ['updatedAt', 'createdAt'] },
      raw: true,
    });

    if (!foundPhone) {
      return next(createHttpError(404, 'Phone Not Found'));
    }

    res.status(200).send({ data: foundPhone });
  } catch (error) {
    next(error);
  }
};

module.exports.updatePhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
    body,
  } = req;

  try {
    const [, [updatedPhone]] = await Phone.update(body, {
      where: { id: phoneId },
      raw: true,
      returning: true,
    });

    if (!updatedPhone) {
      return next(createHttpError(404, 'Phone Not Found'));
    }

    const preparedPhone = _.omit(updatedPhone, ['updatedAt', 'createdAt']);

    res.status(200).send({ data: preparedPhone });
  } catch (error) {
    next(error);
  }
};

module.exports.deletePhoneById = async (req, res, next) => {
  const { phoneId } = req.params;

  try {
    const foundPhone = await Phone.destroy({
      where: { id: phoneId },
    });

    if (foundPhone === 0) {
      return next(createHttpError(404, 'Phone Not Found'));
    }

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
