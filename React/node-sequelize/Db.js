import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres://postgres:ravik@localhost:5432/students');

function connectToPostgres(){
    try {
        sequelize.authenticate();
        console.log('success');
        // console.log(sequelize);
        return sequelize;
    } catch (error) {
        console.log('error', error);
    }
};

const client = connectToPostgres();

export default client;


