const Sequelize = require('sequelize');
const database = require('../config.db');
const schema = "";

class marca extends Sequelize.Model{}

marca.init(
    {
        CodigoMarca: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Nome: {
            type: Sequelize.STRING,
            allowNull: true,

        }
    },
    {
        sequelize: database, modelName: 'marca', schema
    }
)

module.exports = Marca;