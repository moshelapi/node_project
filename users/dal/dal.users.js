import jsonfile from 'jsonfile';
import bcrypt from "bcrypt"

const file = 'C:\\Users\\User\\Desktop\\vs producte\\node.js\\node_server\\users.json';

async function readAllUsers() {
    try {
        const data = await jsonfile.readFile(file);
        return data;
    } catch (error) {
        console.log('aaaa');
        console.error('Error reading JSON file:', error.message);
        return null;
    }
}


async function addUser(obj) {
    try {
        const data = await jsonfile.readFile(file);
        obj.id = data[data.length - 1].id + 1
        data.push(obj)
        await jsonfile.writeFile(file, data)
        return 'The user has been successfully added'
    } catch (error) {
        console.error('Error reading JSON file:', error.message);
        return null;
    }
}

async function deleteUser(id) {
    try {
        const data = await jsonfile.readFile(file);
        let index = data.findIndex((user) => user.id === id);
        if (index === -1) { return 'id is not found' }
        data.splice(index, 1);
        await jsonfile.writeFile(file, data);
        return 'delete seccefuly'
    }
    catch (error) {
        console.error('Error in service', error.message);
        return null;
    }
}


async function putUser(obj, id) {
    try {
        const data = await jsonfile.readFile(file);
        let index = data.findIndex((user) => user.id === id)
        if (index === -1) { return 'id is not found' }
        data[index] = obj
        obj.id = id
        await jsonfile.writeFile(file, data)
        const new_data = await jsonfile.readFile(file);
        return new_data[index]
    } catch (error) {
        console.error('Error reading JSON file:', error.message);
        return null;
    }
}




const usersDal = {
    readAllUsers,
    addUser,
    deleteUser,
    putUser
}

export default usersDal

