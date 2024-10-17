const { Router } = require('express');
const controller = require('../controllers/newMessageController');

const router = Router();

router.get('/', controller.newMessage);
router.post('/', controller.addMessage);

module.exports = router;
