const express = require('express');
const fbController = require('../controllers/fbController');
const router = express.Router();

router.get('/', fbController.getInfo);
router.get('/messages/:conversationId', fbController.getMessages);
router.post('/messages', fbController.sendMessage);

module.exports = router;
