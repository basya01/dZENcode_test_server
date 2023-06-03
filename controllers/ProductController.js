import { ProductType } from '../db/models/index.js';

class ProductController {
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
