import userService from "../service/service.users.js";


const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers(); 
            return res.status(200).send(users)
    }
    catch (error) {
        res.status(500).send(error)
    }
};


const addUser = async(req,res)=>{
    try {
        const users = await userService.addUser(req.body);
        console.log(users);
        return res.status(200).send(users)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleteUser = async(req,res)=>{
    try {
        const message = await userService.deleteUser(req.params.id);
        return res.status(200).send(message)
    } catch (error) {
        res.status(500).send(error)
    }
}


const putUser = async(req,res)=>{
    try {
        const products = await userService.putUser(req.body,req.params.id);
        return res.status(200).send(products)
    } catch (error) {
        res.status(500).send(error)
    }
}


const getUsersById = async (req, res) => {
    try {
        const products = await userService.getUserById(req.params.id);
        if (products)
            return res.status(200).send(products)
        else {
            return res.status(404).json({ "message": "No product" })
        }
    }
    catch (error) {
        console.error(error)
    }
}




const controllerUsers = {
    getAllUsers,
    addUser,
    deleteUser,
    putUser,
    getUsersById
}
export default controllerUsers
