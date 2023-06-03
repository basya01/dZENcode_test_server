import sequelize from '../index.js';
import { DataTypes } from 'sequelize';
import Product from './Product.js';

const Order = sequelize.define(
  'Order',
  {
    title: DataTypes.STRING(50),
    description: DataTypes.TEXT,
  },
  {
    updatedAt: false,
  }
);

Order.hasMany(Product, { foreignKey: 'orderId' });

export default Order;
