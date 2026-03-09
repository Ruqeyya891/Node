const express = require('express');
const router = express.Router();

const {
    fetchAllCategories,
    fetchCategoryById,
    insertCategory,
    modifyCategory,
    removeCategory
} = require('../controllers/categoryController');

const categoryValidator = require('../middlewares/categoryValidator');

router.get('/', fetchAllCategories);

router.get('/:id', fetchCategoryById);

router.post('/', categoryValidator, insertCategory);

router.put('/:id', modifyCategory);

router.delete('/:id', removeCategory);

module.exports = router;