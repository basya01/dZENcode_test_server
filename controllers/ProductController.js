import { ProductType, Product } from '../db/models/index.js';
import ProductDTO from '../routes/dto/ProductDto.js';

class ProductController {
  async getAll(req, res, next) {
    try {
      const products = await Product.findAll();
      return res.json(products);
    } catch (e) {
      next(e);
    }
  }
  async getAllTypes(req, res, next) {
    try {
      const types = await ProductType.findAll();
      return res.json(types);
    } catch (e) {
      next(e);
    }
  }

  async create(req, res, next) {
    try {
      const productDto = new ProductDTO(
        req.body.serialNumber,
        req.body.isNew,
        req.body.photo,
        req.body.title,
        req.body.specification,
        req.body.typeId,
        req.body.orderId
      );
      const product = await Product.create(productDto);

      return res.json(product);
    } catch (e) {
      next(e);
    }
  }
}

export default new ProductController();
