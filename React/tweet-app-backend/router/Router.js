import express from 'express';
import { findAllUserAPI, followUserAPI, getFollowingusersAPI, registerUserAPI, unfollowUserAPI, userLoginAPI } from './Controller.js';

export const router = express.Router();

router.route('/registerUser').post(registerUserAPI);
router.route('/userLogin').post(userLoginAPI);
router.route('/findAllUser').post(findAllUserAPI);
router.route('/followUser').post(followUserAPI);
router.route('/unfollowUser').post(unfollowUserAPI);
router.route('/getFollowingUsers').post(getFollowingusersAPI);


