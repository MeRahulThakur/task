var sqldb = require('../components/sqldb/index');
var Categories = sqldb.Categories;
var Products = sqldb.Products;

let allCategories = () => {
    return new Promise(function (resolve, reject) {
        Products.findAll({
            include: {
                model: Categories,
                where: {status: 1},
                attributes: ['category_id', 'category_name']
            },
            where: {
                status: 1
            },
            attributes: [[sqldb.Sequelize.fn('COUNT', sqldb.Sequelize.col('product_id')), 'totalProducts']],
            group: ['Category.category_id'],
            raw: true
        }).then((res) => {
            if (res.length > 0)
                resolve(res);
            else
                resolve(0);
        }).catch((err) => {
            reject('fail');
        });
    })
}

module.exports = {
    allCategories
}