'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentCoursePair extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StudentCoursePair.belongsTo(models.Student, {
        foreignKey: 'studentId',
        onDelete: 'CASCADE'
      });
      StudentCoursePair.belongsTo(models.Course, {
        foreignKey: 'courseId',
        onDelete: 'CASCADE'
      });
    }
  };
  StudentCoursePair.init({
    studentId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StudentCoursePair',
  });
  return StudentCoursePair;
};