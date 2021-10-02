const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// create User model
class User extends Model {
    // run on instance data (per user) to check password 
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}

User.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        // validation for password, must be >= 8 characters
        validate: {
            len: [8]
        }
    }
  },

  {

    hooks: {
        // before newUser is logged in bcrypt hashes password
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
    },
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // disable the modification of table names; 
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;

// quick test for module log below
// console.log(module);