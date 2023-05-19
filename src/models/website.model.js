const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const RequiredString = { type: String, required: true };

const websiteSchema = mongoose.Schema(
  {
    domainUrl: RequiredString,
    defaultCountry: RequiredString,
    defaultTimezone: RequiredString,
    defaultLanguage: RequiredString,
    notificationsContactEmail: {
      type: String,
      default: 'support@pushmaster.xyz',
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
websiteSchema.plugin(toJSON);
websiteSchema.plugin(paginate);

/**
 * @typedef Website
 */
const Website = mongoose.model('Website', websiteSchema);

module.exports = Website;
