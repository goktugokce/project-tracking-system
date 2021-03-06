'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lecturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Lecturer.hasMany(models.Course, {
        foreignKey: 'lecturerId',
      });
    
    }
  };
  Lecturer.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    confirmationCode: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM("pending", "confirmed", "rejected"),
      defaultValue: "pending"
    }
  }, {
    sequelize,
    modelName: 'Lecturer',
  });
  return Lecturer;
};