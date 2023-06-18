import {
  Guarantee,
  Order,
  Price,
  Product,
  ProductType,
} from '../db/models/index.js';

class ProductService {
  async getTotalCount(type) {
    const where = {};
    if (type) {
      where.typeId = type;
    }
    console.log(where);
    const totalCount = await Product.count({ where });

    return totalCount;
  }

  async findAll(type) {
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

    return products;
  }
}

export default new ProductService();
