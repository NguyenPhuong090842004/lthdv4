const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Danh sách sản phẩm
router.get('/', productController.index);

// Thêm sản phẩm
router.get('/new', productController.newForm);
router.post('/', productController.create);

// Sửa sản phẩm
router.get('/:id/edit', productController.editForm);
router.put('/:id', productController.update);

// Xóa sản phẩm
router.delete('/:id', productController.delete);

module.exports = router;
