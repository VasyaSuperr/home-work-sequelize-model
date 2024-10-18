const {
  PAGE_VALIDATION_SCHEMA,
  RESULTS_VALIDATION_SCHEMA,
} = require('../utils/validatedSchemas');

const DEFAULT_PAGE = 1;
const DEFAULT_RESULTS = 5;

module.exports.paginatePhones = async (req, res, next) => {
  let { page = DEFAULT_PAGE, results = DEFAULT_RESULTS } = req.query;

  page = (await PAGE_VALIDATION_SCHEMA.isValid(page)) ? page : DEFAULT_PAGE;
  results = (await RESULTS_VALIDATION_SCHEMA.isValid(results))
    ? results
    : DEFAULT_RESULTS;

  const limit = results;
  const offset = page * (page - 1);

  req.pagination = { limit, offset };
  next();
};
