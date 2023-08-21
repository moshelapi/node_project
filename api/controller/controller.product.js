import productService from "../service/service.product.js";

const getAllProduct = async (req, res) => {
    try {
        const products = await productService.getAllProduct();
        if (products.length > 0)
            return res.status(200).send(products)
        else {
            return res.status(404).json({ "message": "No product" })
        }
    } catch (error) {
        console.error(error)
    }
};

const getProductById = async (req, res) => {
    try {
        const products = await productService.getProductById(req.params.id);
        if (products)
            return res.status(200).send(products)
        else {
            return res.status(404).json({ "message": "No product" })
        }
    }
    catch (error) {
        console.error(error)
    }

}


const addProduct = async (req, res) => {
    try {
        const products = await productService.addProduct(req.body);
        return res.status(200).send(products)
    } catch (error) {
        console.error(error)
    }
};


const putProduct = async(req,res)=>{
    try {
        const products = await productService.putProduct(req.body,req.params.id);
        return res.status(200).send(products)
    } catch (error) {
        console.error(error)
    }
}

const deleteProduct = async(req,res)=>{
    try {
        const message = await productService.deleteProduct(req.params.id);
        return res.status(200).send(message)
    } catch (error) {
        console.error(error)
    }
}

const updateQuantity = async(req,res)=>{
    try {
         const {quantity} = req.body
        const message = await productService.updateQuantity(req.params.id,quantity);
        return res.status(200).send(message)
    } catch (error) {
        console.error(error)
    }

}


const productController = {
    getAllProduct,
    getProductById,
    addProduct,
    putProduct,
    deleteProduct,
    updateQuantity
}

export default productController