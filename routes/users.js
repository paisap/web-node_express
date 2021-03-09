#!/usr/bin/node

const { CreateUSer } = require('../database/send_information');
//Function that checks the existence of the user and creates it
const newUser = (req, res, next) => {
    CreateUSer(req.body);
    res.send(JSON.stringify({'STATUS': 'UNA CHIMBA'}));
}

module.exports = { newUser };