import express from 'express';
import { findAllUserAPI, registerUserAPI, userLoginAPI } from './Controller.js';

export const router = express.Router();

router.route('/registerUser').post(registerUserAPI);
router.route('/userLogin').post(userLoginAPI);
router.route('/findAllUser').post(findAllUserAPI);


