import usersDal from "../dal/dal.users.js";
import bcrypt from "bcrypt"

async function getAllUsers() {
    try {
        const data = await usersDal.readAllUsers()
        return data
    }
    catch (error) {
        console.error('Error in service.users:', error.message);
        return null;
    }
}

async function addUser(obj){
    const password = obj.password
    const hash = bcrypt.hashSync(password, 10);
    try {
        obj.password = hash
        const data = await usersDal.addUser(obj)
        return data
    }
    catch (error) {
        return ('Error in service', error.message);
    }
}




const userService = {
    getAllUsers,
    addUser
}

export default userService