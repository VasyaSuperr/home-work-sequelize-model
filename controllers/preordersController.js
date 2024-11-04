const { Preorder, Phone } = require('./../models');
module.exports.getPreorders = async (req, res, next) => {
  const { status } = req.query;

  try {
    const filterOption = {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: {
        model: Phone,
        attributes: ['model', 'brand', 'processor'],
      },
      raw: true,
    };

    if (status) {
      filterOption.where = { status };
    }

    const foundPreorders = await Preorder.findAll(filterOption);

    res.status(200).send({ data: foundPreorders });
  } catch (error) {
    next(error);
  }
};
