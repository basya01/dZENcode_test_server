import sequelize from '../index.js';
import { DataTypes } from 'sequelize';

const Guarantee = sequelize.define(
  'Guarantee',
  {
    start: {
      type: DataTypes.DATE,
    },
    end: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  }
);

export default Guarantee;
