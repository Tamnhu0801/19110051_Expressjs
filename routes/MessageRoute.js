const express = require('express');
const router = express.Router();
const controller = require('../controllers/MessageController');

router.get('',controller.getNameMyGroup);
router.get('/:id', controller.getNameMember);

module.exports = router;