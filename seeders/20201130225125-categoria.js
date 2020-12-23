'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Categoria', [{
            nombre: 'Servicios',
            descripcion: 'Servicios disponibles en la empresa',
            createdAt: new Date(),
            updatedAt: new Date()

        },{
            nombre: 'Casos De Exito',
            descripcion: 'nuestros casos de exito',
            createdAt: new Date(),
            updatedAt: new Date()

        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Categoria', null, {});
    }
};