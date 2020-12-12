'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            // name: 'David',
            name: 'carlos',
            // email: 'prueba@test.com',
            email: 'ejemplo@gmail.com',
            password: '$2y$08$LzenWFgonjBsdkAVj40sJeyVry6Z5Aj7hzu2ykQvy.ZAiBltpYFfi',
            // password: '$2y$12$io3UR5kGDZl29fekR5Viu.7XZpuPXYug7XwsRd8jYJ.znj1vgupTO', //hola
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};