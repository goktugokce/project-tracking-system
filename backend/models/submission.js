'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Submission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Submission.belongsTo(models.Student, {
        foreignKey: 'studentId',
        onDelete: 'CASCADE'
      });
      Submission.belongsTo(models.Homework, {
        foreignKey: 'homeworkId',
        onDelete: 'CASCADE'
      });
    }
  };
  Submission.init({
    url: DataTypes.STRING,
    studentId: DataTypes.INTEGER,
    homeworkId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Submission',
  });
  return Submission;
};