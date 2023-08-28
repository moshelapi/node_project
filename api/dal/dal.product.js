import jsonfile from 'jsonfile';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, 'data.json');

async function readAllProduct() {
    try {
        const data = await jsonfile.readFile(file);
        return data;
    } catch (error) {
        console.error('Error reading JSON file:', error.message);
        return null;
    }
}


async function addProduct(obj) {
    try {
        const data = await jsonfile.readFile(file);
        obj.id = data[data.length - 1].id + 1
        data.push(obj)
        await jsonfile.writeFile(file, data)
        const new_data = await jsonfile.readFile(file);
        return new_data[new_data.length - 1]
    } catch (error) {
        console.error('Error reading JSON file:', error.message);
        return null;
    }
}


async function putProduct(obj, id) {
    try {
        const data = await jsonfile.readFile(file);
        let index = data.findIndex((product) => product.id === id)
        if (index === -1) { return 'index is not found' }
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

async function deleteProduct(id) {

    try {
        const data = await jsonfile.readFile(file);
        let index = data.findIndex((product) => product.id === id);
        if (index === -1) { return 'index is not found' }
        data.splice(index, 1);
        await jsonfile.writeFile(file, data);
        return 'delete seccefuly'
    }
    catch (error) {
        console.error('Error reading JSON file:', error.message);
        return null;
    }
}

async function updateQuantity(id,qun){
    try {
        const data = await jsonfile.readFile(file);
        let index = data.findIndex((product) => product.id === id)
        if (index === -1) { return 'index is not found' }
        data[index].quantity = qun
        await jsonfile.writeFile(file, data)
        return 'update seccefuly'
    } catch (error) {
        console.error('Error reading JSON file:', error.message);
        return null;
    }

}










const productDal =
{
    readAllProduct,
    addProduct,
    putProduct,
    deleteProduct,
    updateQuantity
}

export default productDal

