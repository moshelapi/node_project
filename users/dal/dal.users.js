import jsonfile from 'jsonfile';

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


const usersDal = {
    readAllUsers,
    addUser
}

export default usersDal

