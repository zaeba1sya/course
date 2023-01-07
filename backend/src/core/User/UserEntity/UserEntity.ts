import { DataTypes, Model } from "sequelize";
import sequelize from "database/sequelize";
import type { IUserModel, IUserModelCreation } from "./UserEntity.interfaces";

const User = sequelize.define<Model<IUserModel, IUserModelCreation>>("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
  login: { type: DataTypes.STRING, unique: true },
  pass: { type: DataTypes.STRING },
});

export { User };
