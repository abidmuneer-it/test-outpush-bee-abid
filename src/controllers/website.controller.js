const pick = require('../utils/pick');

const catchAsync = require('../utils/catchAsync');
const { websiteService } = require('../services');

const getWebsites = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['defaultCountry', 'defaultTimezone']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await websiteService.queryWebsites(filter, options);
  res.send(result);
});

const addWebsite = catchAsync(async (req, res) => {
  const result = await websiteService.addWebsite(req.body);
  res.send(result);
});

const getWebsite = catchAsync(async (req, res) => {
  const result = await websiteService.getWebsite(req.params);
  res.send(result);
});

module.exports = {
  getWebsites,
  addWebsite,
  getWebsite,
};
