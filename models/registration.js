'use strict';

module.exports = function (sequelize, DataTypes) {
    var Registration = sequelize.define('Registration', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        company_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: DataTypes.STRING
        }
    }, {
            timestamps: true,
            underscored: true,
            tableName: 'Registrations'
        });

    String.prototype.capitalizeFirstLetter = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    Registration.hook('beforeValidate', function (registration, options) {
        registration.email = registration.email.trim().toLowerCase();
        registration.first_name = registration.first_name.capitalizeFirstLetter();
        registration.last_name = registration.last_name.capitalizeFirstLetter();
        registration.company_name = registration.company_name.capitalizeFirstLetter();
    });

    return Registration;
}  