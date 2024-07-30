const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminContro');

router.post('/add',adminController.addProduct);
router.put('/update/:id',adminController.updateProduct);
router.delete('/delete/:id',adminController.deleteProduct);
router.get('/get',adminController.getAllProduct);

module.exports = router;