const express = require('express');
const router = express.Router();
const controller = require('../controllers/MyGroupController');

router.get('',controller.getMyGroup);

module.exports = router;