const { Website } = require('../models');

const queryWebsites = async (filter, options) => {
  const websites = await Website.paginate(filter, options);
  return websites;
};

const addWebsite = async (payload) => {
  const websites = await Website.create(payload);
  return websites;
};

const getWebsite = async (filter) => {
  const websites = await Website.findOne(filter);
  return websites;
};

module.exports = {
  queryWebsites,
  addWebsite,
  getWebsite,
};
