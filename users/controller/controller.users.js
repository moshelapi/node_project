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


const controllerUsers = {
    getAllUsers,
    addUser
}
export default controllerUsers
