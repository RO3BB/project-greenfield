const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productCtrl.js');

router.post('/product', productCtrl.createProduct);

module.exports = router;