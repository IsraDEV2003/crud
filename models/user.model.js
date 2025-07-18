import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("User", {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true  
   },
   firstName: {
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
   age: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   password: {
      type: DataTypes.STRING,
      allowNull: false
   }},{
   timestamps: true,
   }
);

export default User;