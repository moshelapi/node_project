import express from "express"
import usersDal from "../dal/dal.users.js";
import controllerUsers from "../controller/controller.users.js";



const routerUsers = express.Router();

routerUsers.get('/',controllerUsers.getAllUsers)

routerUsers.post('/',controllerUsers.addUser)



export default routerUsers