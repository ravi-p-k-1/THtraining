import express from 'express';
import { createUserAPI } from './Controller.js';

export const router = express.Router();

router.route('/createUser').post(createUserAPI);


