const express = require('express');
const router = express.Router();
const controller = require('../controllers/19110051Controller');

router.get('/:id',controller.getMemberMSSV);
router.post('', controller.postMember);

module.exports = router;