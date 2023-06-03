import sequelize from '../index.js';
import { DataTypes } from 'sequelize';
import Guarantee from './Guarantee.js';
import Price from './Price.js';

// id: 1,
//     serialNumber: 1234,
//     isNew: 1,
//     photo: 'pathToFile.jpg',
//     title: 'Product 1',
//     type: 'Monitors',
//     specification: 'Specification 1'
//     guarantee: {
//       start: '2017-06-29 12:09:33',
//       end: '2017-06-29 12:09:33'
//     },
//     price: [
//       {value: 100, symbol: 'USD', isDefault: 0},
//       {value: 2600, symbol: 'UAH', isDefault: 1}
//     ],
//     order: 1,
//     date: '2017-06-29 12:09:33'

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
    createdAt: 'date',
    updatedAt: false,
  }
);

Product.hasOne(Guarantee, { foreignKey: 'productId' });
Product.hasMany(Price, { foreignKey: 'productId' });

export default Product;
