import express from "express"
import middleware from "../../Middleware.js";
import controllerUsers from "../controller/controller.users.js";



const routerUsers = express.Router();

routerUsers.get('/',middleware.isAdmin,controllerUsers.getAllUsers)

routerUsers.put('/:id',middleware.isCreator,controllerUsers.putUser)

routerUsers.post('/',middleware.bodyValidate,controllerUsers.addUser)

routerUsers.get('/:id',middleware.isAdmin,controllerUsers.getUsersById)

routerUsers.delete('/:id',middleware.isAdmin,controllerUsers.deleteUser)



export default routerUsers