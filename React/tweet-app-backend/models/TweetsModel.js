import { DataTypes } from "sequelize";
import { sequelize } from "../Db.js";

export const Tweet = sequelize.define('Tweet',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
{
    freezeTableName: true,
})


