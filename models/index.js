import { Sequelize } from 'sequelize'; 
import  dbConfig  from '../config/db.js';
import UserModel from '../models/users.model.js';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = UserModel(sequelize, Sequelize);

export default db;
