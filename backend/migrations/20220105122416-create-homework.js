'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Homeworks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      homeworkName: {
        type: Sequelize.STRING
      },
      deadline: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Homeworks');
  }
};