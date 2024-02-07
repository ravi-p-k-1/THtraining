import models from '../models/index.js';

class UserService{
    constructor(sequelize){
        models(sequelize);
        this.client = sequelize;
        this.models = sequelize.models;
    }

    async getUser(){
        return 'getting user from db';
    }

}

module.exports = UserService;