import sequelize from '../index.js';
import { DataTypes } from 'sequelize';

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

export default Order;
