import usersDal from "../dal/dal.users.js";
import bcrypt from "bcrypt"

async function getAllUsers(obj) {
    const {id,email,password} = obj
    try {
        const data = await usersDal.readAllUsers()
        const index = data.findIndex((user) => user.id === Number(id) && user.email === email && bcrypt.compareSync(password,user.password));
        if (index === -1) {
            return 'User not found';
        }
        else{
            if(data[index].isAdmin===true){
                console.log(data);
                return data    }
            else {return 'No access permission'}
        }
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