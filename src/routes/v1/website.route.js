const express = require('express');
const auth = require('../../middlewares/auth');
const websiteController = require('../../controllers/website.controller');

const router = express.Router();

router.route('/').get(auth(), websiteController.getWebsites);
router.route('/').post(auth(), websiteController.addWebsite);
router.route('/:domainUrl?').get(auth(), websiteController.getWebsite);

module.exports = router;
