import { Sequelize } from "sequelize";
import sequelizeDatabase from "./database.js";

let sequelize = await sequelizeDatabase();

const Usuario = sequelize.define("Usuario", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false        
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

export default Usuario;