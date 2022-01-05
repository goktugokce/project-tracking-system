'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('StudentCoursePairs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Students',
          key: 'id',
          as: 'studentId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      courseId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Courses',
          key: 'id',
          as: 'courseId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('StudentCoursePairs');
  }
};