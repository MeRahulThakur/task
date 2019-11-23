'use strict';
const Sequelize = require('sequelize');
var config = require('../../config');
const sequelize = new Sequelize(config.sql.database, config.sql.username, config.sql.password, {
    host: config.sql.host,
    port: config.sql.port,
    dialect: config.sql.dialect,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    timezone: config.sql.timezone,
    define: {
        underscored: true,
        timestamps: true,
        charset: 'utf8',
        collate: 'utf8_general_ci'
    }
});

var Categories = sequelize.define('Categories', {
    category_id: {
        type: Sequelize.INTEGER(14).UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    category_name: Sequelize.STRING(255),
    status: {
        type: Sequelize.TINYINT(1),
        comment: "0:Deleted 1:Active",
        defaultValue: 1
    }
}, {
    tableName: 'categories',
    underscored: true
});

var Products = sequelize.define('Products', {
    product_id: {
        type: Sequelize.INTEGER(14).UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    name: Sequelize.STRING(250),
    price: Sequelize.STRING(50),
    status: {
        type: Sequelize.TINYINT(1),
        comment: "0:Deleted 1:Active",
        defaultValue: 1
    }
}, {
    tableName: 'products',
    underscored: true
});
Products.belongsTo(Categories, { foreignKey: 'category_id' });

module.exports = {
    Categories,
    Products,
    sequelize
}