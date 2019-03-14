const express = require('express');
const router = express.Router();

const WebhookController = require('../controllers/WebhookController');
const { catchErrors } = require('../middlewares/errors');

router.get('/api', catchErrors(WebhookController.merge));

module.exports = router;
