const express = require('express');
const router = express.Router();

const {
    fetchAllProducts,
    fetchProductById,
    insertProduct,
    modifyProduct,
    removeProduct
} = require('../controllers/productController');

const productValidator = require('../middlewares/productValidator');

router.get('/', fetchAllProducts);

router.get('/:id', fetchProductById);

router.post('/', productValidator, insertProduct);

router.put('/:id', modifyProduct);

router.delete('/:id', removeProduct);

module.exports = router;