import ContactService from "../services/ContactServices.js";
import UserService from "../services/UserServices.js";
import { User } from "../models/UsersModel.js";
import { Contact } from "../models/ContactsModel.js";

const userService = new UserService(User);
const contactService = new ContactService(Contact);

export const registerUserAPI = async (req, res) => {
  const { firstName, lastName, userName, password, contact } = req.body;

  const usersArray = await userService.findAllUser({ userName });

  if (usersArray.length === 0) {
    const user = await userService.createUser({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      password: password,
    });
    const contactData = await contactService.createContact({
      contact: contact,
      UserId: user.id,
    });

    res.json({
      message: "user registered successfully",
      statusCode: 201,
      user: user,
      contact: contactData,
    });

    return;
  }

  res.json({
    message: "username already exists",
    statusCode: 404,
  });
};

export const userLoginAPI = async (req, res) => {
  const { userName, password } = req.body;

  const user = await userService.findOneUser({
    userName: userName,
    password: password,
  });

  if(user){
    res.json({
        message: "login successfull",
        statusCode: 200,
        user: user,
    });

    return;
  }

  res.json({
    message: "login unsuccessfull",
    statusCode: 404,
  })

};

export const findAllUserAPI = async (req, res) => {
  const { userName, currentUser } = req.body;

  const usersArray = await userService.findAllUser({ userName: userName, currentUser: currentUser });

  res.json({
    message: "users found successfully",
    usersArray: usersArray,
  });
};

export const followUserAPI=async(req, res)=>{
  const {currentUserId, followedUserId} = req.body;

  const currentUser = await userService.findOneUserThroughUserId({userId: currentUserId});
  const followedUser = await userService.findOneUserThroughUserId({userId: followedUserId});
  
  currentUser.addUser(followedUser);

  res.json({
    message: `you are now following ${followedUser.userName}`,
  })
}

export const unfollowUserAPI=async(req, res)=>{
  const {currentUserId, followedUserId} = req.body;

  const currentUser = await userService.findOneUserThroughUserId({userId: currentUserId});
  const followedUser = await userService.findOneUserThroughUserId({userId: followedUserId});
  
  currentUser.removeUser(followedUser);

  res.json({
    message: `you are not following ${followedUser.userName}`,
  })
}

export const getFollowingusersAPI=async(req, res)=>{
  const {currentUserId} = req.body;

  const currentUser = await userService.findOneUserThroughUserId({userId: currentUserId});
  const usersArray = await currentUser.getUser({raw: true});

  res.json({
    message: `data fetched successfully`,
    usersArray: usersArray,
  })
}

