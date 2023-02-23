const { Router } = require("express");

const router = Router();

const {
  getProducts,
  createProducts,
  updateProduct,
  getProduct,
  deleteProducts,
} = require("../controllers/products.controllers");

router.route("/").post(createProducts)

router.route("/").get(getProducts).get(getProduct)

router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProducts);

module.exports = router;
