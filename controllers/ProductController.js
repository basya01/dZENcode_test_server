import {
  Guarantee,
  Order,
  Price,
  Product,
  ProductType,
} from '../db/models/index.js';
import ProductDTO from '../dto/ProductDto.js';

class ProductController {
  async getAll(req, res, next) {
    const { type } = req.query;

    try {
      const where = {};
      if (type) {
        where.typeId = type;
      }
      const products = await Product.findAll({
        where,
        include: [
          {
            model: ProductType,
            as: 'type',
          },
          { model: Order, as: 'order' },
          { model: Price, as: 'price', attributes: { exclude: 'productId' } },
          {
            model: Guarantee,
            as: 'guarantee',
          },
        ],
        attributes: { exclude: ['typeId', 'guaranteeId', 'orderId'] },
      });

      const totalProducts = await Product.count();

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
