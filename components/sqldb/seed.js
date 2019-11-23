/**
 * Populate DB with sample data on server start
 * to disable, config, and set `seedDB: false`
 */

'use strict';
var config = require('../../config')
var sqldb = require('./index');
var Categories = sqldb.Categories;
var Products = sqldb.Products;

//category, products
Categories.sync({ force: config.seedDBForce }).then(() => {
    Categories.bulkCreate([
        { category_name: 'Category 1', status: 1 },
        { category_name: 'Category 2', status: 1 },
        { category_name: 'Category 3', status: 1 },
        { category_name: 'Category 4', status: 1 },
        { category_name: 'Category 5', status: 1 }
    ]);
    Products.sync({ force: config.seedDBForce }).then(() => {
        Products.bulkCreate([
            { name: 'Product 1', price:'100.15', status: 1, category_id: 1 },
            { name: 'Product 2', price:'120.45', status: 1, category_id: 2 },
            { name: 'Product 3', price:'90.00', status: 1, category_id: 5 },
            { name: 'Product 4', price:'200.15', status: 1, category_id: 1 },
            { name: 'Product 5', price:'150.15', status: 1, category_id: 2 },
            { name: 'Product 6', price:'115.25', status: 1, category_id: 1 },
            { name: 'Product 7', price:'350.00', status: 1, category_id: 1 },
            { name: 'Product 8', price:'230.65', status: 1, category_id: 3 },
            { name: 'Product 9', price:'196.78', status: 1, category_id: 2 },
            { name: 'Product 10', price:'546.75', status: 1, category_id: 1 },
            { name: 'Product 11', price:'67.00', status: 1, category_id: 3 },
            { name: 'Product 12', price:'32.00', status: 1, category_id: 4 },
            { name: 'Product 13', price:'45.50', status: 1, category_id: 1 },
        ]);
    });
}); 