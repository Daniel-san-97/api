const Sequelize = require('sequelize');

const database = new Sequelize('react', 'danisan', '250497', {
    dialect: 'mssql', host: 'localhost', port: 1433
});

database.sync();

module.exports = database;