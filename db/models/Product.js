import sequelize from '../index.js';
import { DataTypes } from 'sequelize';
import Guarantee from './Guarantee.js';
import Order from './Order.js';
import Price from './Price.js';

const Product = sequelize.define(
  'Product',
  {
    serialNumber: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    isNew: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    specification: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    updatedAt: false,
  }
);

Product.belongsTo(Guarantee, { foreignKey: 'guaranteeId', as: 'guarantee' });
Product.belongsTo(Order, { foreignKey: 'orderId', as: 'order' });
Order.hasMany(Product, { foreignKey: 'orderId', as: 'products' });
Product.hasMany(Price, { foreignKey: 'productId', as: 'price' });

export default Product;
