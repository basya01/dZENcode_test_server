import { ProductType } from '../db/models/index.js';

class ProductController {
  async getAllTypes(req, res) {
    try {
      const types = await ProductType.findAll();
      res.json(types);
    } catch (error) {
      res.status(500).json({ message: 'Unexpected error' });
    }
  }
}

export default new ProductController();
