import { Op } from "sequelize";

class UserService {
  constructor(User) {
    this.service = User;
  }

  async createUser({ firstName, lastName, userName, password }) {
    try {
      const user = await this.service.create({ firstName, lastName, userName, password });
      return user;
    } catch (error) {
      return error;
    }
  }

  async findOneUser({ userName, password }){
    try {
      const user = await this.service.findOne({where: {userName: userName, password: password} });
      return user;
    } catch (error) {
      return error;
    }
  }

  async findAllUser({userName, currentUser}){
    try {
      const usersArray = await this.service.findAll({where: {userName: {
        [Op.iLike]: `%${userName}%`,
        [Op.ne]: currentUser,
      }}});
      return usersArray;
    } catch (error) {
      return error;
    }
  }

  async findOneUserThroughUserId({userId}){
    try {
      const user = await this.service.findOne({ where: {id: userId} });
      return user;
    } catch (error) {
      return error;
    }
  }

}

export default UserService;
