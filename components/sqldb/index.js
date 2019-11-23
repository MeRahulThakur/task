'use strict'
const Sequelize = require('sequelize');
var Schemas = require('./Schemas');
var sequelize = Schemas.sequelize;
// Connect all the models/tables in the database to a db object,so everything is accessible via one object
const db = {};
db.Sequelize = Sequelize;
//Models/tables
db.Categories = Schemas.Categories;
db.Products = Schemas.Products;

sequelize
    .authenticate()
    .then((err) => {
        console.log('Database connection has been established successfully.');
    })
    .catch((err) => {
        console.log('Unable to connect to the database:', err);
    });

module.exports = db;