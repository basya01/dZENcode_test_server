import { ProductType, Product } from '../db/models/index.js';

class ProductController {
  async getAll(req, res, next) {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (e) {
      next(e);
    }
  }
  async getAllTypes(req, res, next) {
    try {
      const types = await ProductType.findAll();
      res.json(types);
    } catch (e) {
      next(e);
    }
  }
}

export default new ProductController();
