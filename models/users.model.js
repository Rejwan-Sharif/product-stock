import { DataTypes } from "sequelize";

const User = (sequelize, Sequelize) => {
  return sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone:{
      type:DataTypes.STRING,
    }
  }, {
    tableName: 'users',
    timestamps: false
  });
};

export default User;
