"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // return Promise.all([
    //   queryInterface.addColumn('Students', 'confirmationCode', {
    //     type: Sequelize.STRING
    //   }),
    //   queryInterface.addColumn('Students', 'status', {
    //   type: Sequelize.ENUM("pending", "confirmed", "rejected"),
    //   defaultValue: "pending"
    //   })
    // ]);

     try {

      await queryInterface.addColumn('Students', 'confirmationCode', {
        type: Sequelize.STRING,
        unique: true
      });

      await queryInterface.addColumn('Students', 'status', {
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
    //   queryInterface.removeColumn('Students', 'namconfirmationCodee'),
    //   queryInterface.removeColumn('Students', 'status')
    // ]);
    
    try {
      await queryInterface.removeColumn("Students", "confirmationCode");
      await queryInterface.removeColumn("Students", "status");

      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
};
