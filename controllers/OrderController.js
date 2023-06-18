import { Order } from '../db/models/index.js';
import { OrderDTO } from '../dto/index.js';
import OrderService from '../services/OrderService.js';

class OrderConroller {
  async getAll(req, res, next) {
    try {
      const orders = await OrderService.findAll();
      const totalOrders = await Order.count();

      return res.json({ orders, totalOrders });
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
