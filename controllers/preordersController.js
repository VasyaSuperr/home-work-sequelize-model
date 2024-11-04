const { Preorder, Phone } = require('./../models');
module.exports.getPreorders = async (req, res, next) => {
  try {
    const foundPreorders = await Preorder.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: {
        model: Phone,
        attributes: ['model', 'brand', 'processor'],
      },
      raw: true,
    });

    res.status(200).send({ data: foundPreorders });
  } catch (error) {
    next(error);
  }
};
