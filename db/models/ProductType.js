import sequelize from '../index.js';
import { DataTypes } from 'sequelize';
import Product from './Product.js';

const ProductType = sequelize.define(
  'Product_Type',
  {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

ProductType.hasMany(Product, { foreignKey: 'typeId' });

export default ProductType;
