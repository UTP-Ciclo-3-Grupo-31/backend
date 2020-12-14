'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            // name: 'David',
            name: 'carlos',
            email: 'ejemplo@gmail.com',
            password: '$2y$08$o.SiTuSr26sk9OcwHUt7R.JBiOgN5vrHDU/uVP4XOwG.VNxgp9GBS',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};