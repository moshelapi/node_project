
import usersDal from "./dal/dal.users.js";
import bcrypt from "bcrypt"

const isAdmin = async (req, res, next)=> {
    const email = req.query.email
    const password = req.query.password
    try {
        const data = await usersDal.readAllUsers()
        const user = data.find((user) =>user.email === email && bcrypt.compareSync(password,user.password));
        if (!user) {
            res.status(404).send('User not found')
            return ;
        }
        else{
            if(user.isAdmin){
                next()   }
            else {res.send('No access permission')
             return }
        }
    }
    catch (error) {
        res.status(500)('Error in server:', error.message);
        return;
    }
  }


const middleware = {
    isAdmin
}

export default middleware