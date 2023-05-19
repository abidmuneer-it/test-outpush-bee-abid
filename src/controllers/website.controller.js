const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { websiteService } = require('../services');

const getWebsites = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['defaultCountry', 'defaultTimezone']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await websiteService.queryWebsites(filter, options);
  res.send(result);
});

module.exports = {
  getWebsites,
};
