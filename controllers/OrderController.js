import {
  Guarantee,
  Order,
  Price,
  Product,
  ProductType,
} from '../db/models/index.js';
import { OrderDTO } from '../routes/dto/index.js';

class OrderConroller {
  async getAll(req, res, next) {
    try {
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
      return res.json(orders);
    } catch (e) {
      next(e);
    }
  }

  async create(req, res, next) {
    try {
      const orderDto = new OrderDTO(req.body.title, req.body.description);
      const product = await Order.create(orderDto);

      return res.json(product);
    } catch (e) {
      next(e);
    }
  }
}

export default new OrderConroller();
