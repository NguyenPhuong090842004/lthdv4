const Product = require('../models/product');
const Supplier = require('../models/supplier');

// Danh sách sản phẩm
exports.index = async (req, res) => {
  try {
    const products = await Product.find().populate('supplier');
    res.render('products/index', { products });
  } catch (err) {
    console.error(err);
    res.status(500).send('Lỗi lấy danh sách sản phẩm');
  }
};

// Form thêm sản phẩm
exports.newForm = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.render('products/new', { suppliers });
  } catch (err) {
    console.error(err);
    res.status(500).send('Lỗi load form thêm sản phẩm');
  }
};

// Lưu sản phẩm mới
exports.create = async (req, res) => {
  try {
    const { name, price, supplier } = req.body;
    await Product.create({ name, price, supplier });
    res.redirect('/products');
  } catch (err) {
    console.error(err);
    res.status(400).send('Lỗi khi tạo sản phẩm');
  }
};

// Form sửa sản phẩm
exports.editForm = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const suppliers = await Supplier.find();
    res.render('products/edit', { product, suppliers });
  } catch (err) {
    console.error(err);
    res.status(500).send('Lỗi load form sửa sản phẩm');
  }
};

// Cập nhật sản phẩm
exports.update = async (req, res) => {
  try {
    const { name, price, supplier } = req.body;
    await Product.findByIdAndUpdate(req.params.id, { name, price, supplier });
    res.redirect('/products');
  } catch (err) {
    console.error(err);
    res.status(400).send('Lỗi khi cập nhật sản phẩm');
  }
};

// Xóa sản phẩm
exports.delete = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/products');
  } catch (err) {
    console.error(err);
    res.status(400).send('Lỗi khi xóa sản phẩm');
  }
};
