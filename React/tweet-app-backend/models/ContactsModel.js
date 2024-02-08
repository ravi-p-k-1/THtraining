import { DataTypes } from "sequelize";
import { sequelize } from "../Db.js";

export const Contact = sequelize.define('Contact', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    contact: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},
{
    freezeTableName: true,
});
