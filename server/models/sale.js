'use strict';
module.exports = function (sequelize, DataTypes) {

    var Sale = sequelize.define('Sale', {
        date: DataTypes.DATE,
        customerId: {
            type: DataTypes.INTEGER,
            model: 'Customer',
            key: 'id'
        }       
    });

    Sale.associate = function (models) {
        models.Sale.hasMany(models.SaleDetail, {
            as: 'saledetails',
            foreignKey: 'saleId'
        });
        models.Sale.belongsTo(models.Customer, {
            as: 'customer',
            foreignKey: 'customerId'
        });
    };
    return Sale;
};
