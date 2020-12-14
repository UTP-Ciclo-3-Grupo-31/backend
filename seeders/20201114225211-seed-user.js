'use strict';
//este archivo tiene la "semilla" de 1 usuario para ser creado por defecto
//npx sequelize-cli db:seed:all
module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            name: 'carlos',
            email: 'ejemplo@gmail.com',
            password: '$2y$08$o.SiTuSr26sk9OcwHUt7R.JBiOgN5vrHDU/uVP4XOwG.VNxgp9GBS',//micontraseña
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};