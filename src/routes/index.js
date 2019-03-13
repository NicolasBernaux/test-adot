const express = require('express');
const router = express.Router();

const WebhookController = require('../controllers/WebhookController');
const { catchErrors } = require('../middlewares/errors');

router.post('/api', catchErrors(WebhookController.merge));

module.exports = router;
