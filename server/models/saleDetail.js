'use strict';
module.exports = function (sequelize, DataTypes) {

    var SaleDetail = sequelize.define('SaleDetail', {
        saleId: {
            type: DataTypes.INTEGER,
            model: 'Sale',
            key: 'id'
        },
        productId: {
            type: DataTypes.INTEGER,
            model: 'Product',
            key: 'id'
        },
        quantity: DataTypes.INTEGER,
        price: DataTypes.DECIMAL(10,2),
        discount: DataTypes.DECIMAL(10,2)
    });

//     SaleDetail.associate = function (models) {

//     };

    return SaleDetail;
};
