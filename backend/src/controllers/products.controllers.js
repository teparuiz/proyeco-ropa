const productsCtrl = {};

const Product = require("../models/Product");

productsCtrl.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

productsCtrl.createProducts = async (req, res) => {
  const { id, title, price, description, image } = req.body;
  const newProduct = new Product({
    id, title, price, description, image
  });
  await newProduct.save();
  res.json({ message: "Product Saved" });
};

productsCtrl.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
  res.json(product);
  } catch (error) {
    res.status(500).json(error)
  }
};

productsCtrl.updateProduct = async (req, res) => {
  const { id, title, price, description, image } = req.body;
  await Product.findByIdAndUpdate(req.params.ud, { id, title, price, description, image });
  res.json({ message: "Product Update" });
};

productsCtrl.deleteProducts = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};

module.exports = productsCtrl;
