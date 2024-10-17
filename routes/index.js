const { Router } = require('express');
const controller = require('../controllers/indexController');

const router = Router();

router.get('/', controller.getAllMessages);
router.get('/messages/:index', controller.getMessage);

module.exports = router;
