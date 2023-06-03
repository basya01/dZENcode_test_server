import sequelize from '../index.js';
import { DataTypes } from 'sequelize';
import Guarantee from './Guarantee.js';
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

Product.hasOne(Guarantee, { foreignKey: 'productId' });
Product.hasMany(Price, { foreignKey: 'productId' });

export default Product;
