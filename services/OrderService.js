import {
  Guarantee,
  Order,
  Price,
  Product,
  ProductType,
} from '../db/models/index.js';

class OrderService {
  async getTotalCount() {
    const totalCount = await Order.count();

    return totalCount;
  }

  async findAll() {
    const orders = await Order.findAll({
      include: {
        model: Product,
        as: 'products',
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
      },
    });

    return orders;
  }
}

export default new OrderService();
