import { DataTypes } from "sequelize";

export default (sequelize)=>{
    const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            defaultValue: "john",
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            defaultValue: "doe",
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        freezeTableName: true,
        timestamps: false,
    });

    sequelize.sync();
}
