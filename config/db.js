const { Sequelize } = require("sequelize");
const {
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_DIALECT,
} = require("./config");

module.exports = {
  development: {
    username: "root",
    password: null,
    database: "fixed_aset",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "fixed_aset",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "fixed_aset",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
