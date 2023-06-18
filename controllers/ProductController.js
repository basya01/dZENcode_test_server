import { Product, ProductType } from '../db/models/index.js';
import ProductDTO from '../dto/ProductDto.js';
import { ProductService } from '../services/index.js';

class ProductController {
  async getAll(req, res, next) {
    const { type } = req.query;

    try {
      const products = await ProductService.findAll(type);
      const totalProducts = await ProductService.getTotalCount(type);

      return res.json({ products, totalProducts });
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
