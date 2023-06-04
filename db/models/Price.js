import { DataTypes } from 'sequelize';
import sequelize from '../index.js';

const Price = sequelize.define(
  'Price',
  {
    value: {
      type: DataTypes.FLOAT(15),
      allowNull: false,
    },
    symbol: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    isDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Price;
