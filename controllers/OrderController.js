import { Order } from '../db/models/index.js';
import { OrderDTO } from '../routes/dto/index.js';

class OrderConroller {
  async getAll(req, res, next) {
    try {
      const orders = await Order.findAll();
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
