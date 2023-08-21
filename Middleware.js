
import usersDal from "./users/dal/dal.users.js";
import bcrypt from "bcrypt"
import Joi from "joi";

async function ifUser(email, password) {
    const allUsers = await usersDal.readAllUsers()
    const user = allUsers.find((user) => user.email === email &&bcrypt.compareSync(password,user.password))
    if (user) {
        return user
    } else {
        return false
    }
}




function validate (user) {
    const userSchema = Joi.object({
        id: Joi.number().integer().min(1),
        creator: Joi.number().integer().min(1),
        email: Joi.string().email(),
        password: Joi.string().min(8),
        isAdmin: Joi.boolean(),
    });
    const validationResult = userSchema.validate(user);
    if (validationResult.error) {
        return (validationResult.error.details)
    } else {
        return true
    }
}

const bodyValidate = (req,res,next)=>{
   if (validate(req.body)===true){next()}
   else {res.send( validate(req.body)) }
}

const isAdmin = async (req, res, next) => {
    const email = req.query.email
    const password = req.query.password
    try {
        const user = await ifUser(email, password)
        if (!user) {
            res.status(404).send('User not found')
            return;
        }
        else {
            if (user.isAdmin) {
                next()
            }
            else {
                res.send('No access permission')
                return
            }
        }
    }
    catch (error) {
        res.status(500).send(error.message);
        return;
    }
}




const isCreator = async (req, res, next) => {

    const allUsers = await usersDal.readAllUsers()
    const users = allUsers.find((user) => user.id === Number(req.params.id))
    console.log(users);
    const email = req.query.email
    const password = req.query.password
    try {
        const creator = await ifUser(email, password)
        if (!creator) {
            res.status(404).send('User not found')
            return;
        }
        else {
            if (users.creator === creator.id) {
                next()
            }
            else {
                res.send('No access permission')
                return
            }
        }
    }
    catch (error) {
        res.status(500).send(error.message);
        return;
    }
}



const middleware = {
    isAdmin,
    isCreator,
    bodyValidate
}








export default middleware