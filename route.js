const bodyParser = require('body-parser');
const car = require('./router/cars');
const marca = require('.router/marca');

module.exports = (app) => {
    app.use (
        bodyParser.json(),
        car,
        marca
    )
}