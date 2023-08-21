import express from "express"
import middleware from "../Middleware.js";
import controllerUsers from "../controller/controller.users.js";



const routerUsers = express.Router();

routerUsers.get('/',middleware.isAdmin,controllerUsers.getAllUsers)

routerUsers.post('/',controllerUsers.addUser)



export default routerUsers