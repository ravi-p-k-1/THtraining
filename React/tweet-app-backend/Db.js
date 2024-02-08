import { Sequelize } from "sequelize";

const User = 'postgres';
const password = 'ravik';
const URL = 'localhost';
const PORT = '5432';
const Database = 'tweeter';


export const sequelize = new Sequelize(`postgres://${User}:${password}@${URL}:${PORT}/${Database}`);

export async function authenticateConnection(){
    try {
        await sequelize.authenticate();
        console.log('Connection Established');
    } catch (error) {
        console.log('Connection Failed', error);
    }
}
