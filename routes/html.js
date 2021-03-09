const path = require('path');


const hola = (req, res, next) => {
    res.sendFile(path.join(__dirname + '/web/html/login.html'));
}

module.exports = { hola };