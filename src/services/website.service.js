const { Website } = require('../models');

const queryWebsites = async (filter, options) => {
  const websites = await Website.paginate(filter, options);
  return websites;
};

module.exports = {
  queryWebsites,
};
