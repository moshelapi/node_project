
import productDal from "../dal/dal.product.js";
import bcrypt from "bcrypt"
async function getAllProduct() {
    try {
        const data = await productDal.readAllProduct()
        return data
    }
    catch (error) {
        console.error('Error reading JSON file:', error.message);
        return null;
    }
}

async function getProductById(id) {
    try {
        const data = await productDal.readAllProduct()
        for (let obj of data) {
            if (obj.id === Number(id)) {
                return obj
            }
        }
    }
    catch (error) {
        console.error('Error reading JSON file:', error.message);
        return null;
    }
}

async function addProduct(obj) {
    try {
        const data = await productDal.addProduct(obj)
        return data
    }
    catch (error) {
        console.error('Error reading JSON file:', error.message);
        return null;
    }
}

async function putProduct(obj, id) {
    try {
        const data = await productDal.putProduct(obj, Number(id))
        return data
    }
    catch (error) {
        console.error('Error reading JSON file:', error.message);
        return null;
    }

}

async function deleteProduct(id) {
    try {
        const data = await productDal.deleteProduct(Number(id))
        return data
    }
    catch (error) {
        console.error('Error reading JSON file:', error.message);
        return null;
    }
}

async function updateQuantity(id,qun){
    try {
        const data = await productDal.updateQuantity(Number(id),qun)
        return data
    }
    catch (error) {
        console.error('Error reading JSON file:', error.message);
        return null;
    }

}


const productService = {
    getAllProduct,
    getProductById,
    addProduct,
    putProduct,
    deleteProduct,
    updateQuantity
}

export default productService;