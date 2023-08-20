import express from "express"
import productController from "./controller.product.js";
const router = express.Router();

router.get('/',productController.getAllProduct)


router.get('/:id',productController.getProductById)

router.post('/',productController.addProduct)

router.put('/:id',productController.putProduct)

router.patch('/:id',productController.updateQuantity)

router.delete('/:id',productController.deleteProduct)





export{router}
