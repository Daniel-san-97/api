const Sequelize = require('sequelize');
const database = require('../config/db');
const Marca = require('./marca')
const schema = "";

class marca extends Sequelize.Model{}

carro.init(
    {
        Codigo: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Modelo: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        Ano: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        Placa: {
            type: Sequelize.STRING,
            allowNull: true,
        }
    },
    {
        sequelize: database, modeIName: 'Carro', schema
    }
);

Carro.beLongTo(marca, {
    foreignKey: {
        name: 'MarcaId',
        allowNull: false
    },
    as: 'marca'
});

module.exports = Carro;