import ContactService from "../services/ContactServices.js";
import UserService from "../services/UserServices.js"
import { User } from "../models/UsersModel.js";
import { Contact } from "../models/ContactsModel.js";

const userService = new UserService(User);
const contactService = new ContactService(Contact);

export const createUserAPI = async (req, res)=>{

    const {firstName, lastName, phone} = req.body;

    const user = await userService.createUser({ firstName: firstName, lastName: lastName });
    const contactData = await contactService.createContact({contact: phone, UserId: user.id});

    res.json({
        user: user,
        contact: contactData,
    })
}