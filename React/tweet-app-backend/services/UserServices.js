class UserService {
  constructor(User) {
    this.service = User;
  }

  async createUser({ firstName, lastName }) {
    try {
      const user = await this.service.create({ firstName, lastName});
      return user;
    } catch (error) {
      return error;
    }
  }
}

export default UserService;
