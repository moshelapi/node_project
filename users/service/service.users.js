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

async function getUserById(id) {
    try {
        const data = await usersDal.readAllUsers()
        for (let obj of data) {
            if (obj.id === Number(id)) {
                return obj
            }
        }
    }
    catch (error) {
        console.error('error in service:', error.message);
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



async function deleteUser(id) {
    try {
        const data = await usersDal.deleteUser(Number(id))
        return data
    }
    catch (error) {
        console.error('error in service:', error.message);
        return null;
    }
}


async function putUser(obj, id) {
    try {
        const data = await usersDal.putUser(obj, Number(id))
        return data
    }
    catch (error) {
        console.error('error in service:', error.message);
        return null;
    }

}



const userService = {
    getAllUsers,
    addUser,
    deleteUser,
    putUser,
    getUserById
}

export default userService