"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // return Promise.all([
    //   queryInterface.addColumn('Lecturers', 'confirmationCode', {
    //     type: Sequelize.STRING
    //   }),
    //   queryInterface.addColumn('Lecturers', 'status', {
    //   type: Sequelize.ENUM("pending", "confirmed", "rejected"),
    //   defaultValue: "pending"
    //   })
    // ]);

     try {

      await queryInterface.addColumn('Lecturers', 'confirmationCode', {
        type: Sequelize.STRING,
        unique: true
      });

      await queryInterface.addColumn('Lecturers', 'status', {
        type: Sequelize.ENUM("pending", "confirmed", "rejected"),
        defaultValue: "pending"
      });

      return Promise.resolve();

    } catch (e) {
      return Promise.reject(e);
    }

  },

  down: async (queryInterface, Sequelize) => {
    // return Promise.all([
    //   queryInterface.removeColumn('Lecturers', 'namconfirmationCodee'),
    //   queryInterface.removeColumn('Lecturers', 'status')
    // ]);
    
    try {
      await queryInterface.removeColumn("Lecturers", "confirmationCode");
      await queryInterface.removeColumn("Lecturers", "status");

      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
};
