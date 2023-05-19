const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const publisherSchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    whitelist: {
      type: Boolean,
      required: true,
      default: true,
    },
    commissionRate: {
      type: Number,
      default: 0,
      validate(value) {
        if (value < 0 || value > 1) {
          throw new Error('Invalid Commission Rate');
        }
      },
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
publisherSchema.plugin(toJSON);
publisherSchema.plugin(paginate);

/**
 * @typedef Publisher
 */
const Publisher = mongoose.model('Publisher', publisherSchema);

module.exports = Publisher;
