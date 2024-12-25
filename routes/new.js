const { Router } = require('express');
const controller = require('../controllers/newMessageController');

const router = Router();

router.get('/', controller.getNewMessage);
router.post('/', controller.postNewMessage);

module.exports = router;
