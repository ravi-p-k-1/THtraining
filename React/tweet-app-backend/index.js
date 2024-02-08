import bodyParser from "body-parser";
import express from "express";
import path from "path";
import { sequelize, authenticateConnection } from "./Db.js";
import { User } from "./models/UsersModel.js";
import { Contact } from "./models/ContactsModel.js";
import { Tweet } from "./models/TweetsModel.js";
import { DataTypes } from "sequelize";
import UserService from "./services/UserServices.js";
import ContactService from "./services/ContactServices.js";
import { router } from "./router/Router.js";

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/v1', router);

app.listen(PORT, () => {
  console.log(`server is working on port ${PORT}`);
});


async function sequelizeSync() {
  // User-Contact has one-to-one relationship
  User.hasOne(Contact, {
    foreignKey: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });
  Contact.belongsTo(User);

  // User-Tweet has one-to-many realtionship
  User.hasMany(Tweet, {
    foreignKey: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });
  Tweet.belongsTo(User);

  // User(Following)-User(Followed) has many-to-many relationship
  User.belongsToMany(User, {
    as: "User",
    foreignKey: "UserId",
    through: "Follow",
  });
  User.belongsToMany(User, {
    as: "Followed",
    foreignKey: "FollowedId",
    through: "Follow",
  });

  await sequelize.sync();
}

authenticateConnection();
sequelizeSync();

// const userService = new UserService(User);
// const contactService = new ContactService(Contact);

// const user = await userService.createUser({ firstName: "ravi", lastName: "kakadia" });
// const contact = await contactService.createContact({phone: 1239494393, userid: user.id});

