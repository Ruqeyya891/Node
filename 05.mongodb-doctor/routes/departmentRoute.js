const express = require('express')
const router = express.Router()
const { getAllDepartments, getDepartmentById, createDepartment, updateDepartment, deleteDepartment } = require('../controllers/departmentController')
const { validateDepartment } = require('../middlewares/departmentValidator')

router.get('/', getAllDepartments)
router.get('/:id', getDepartmentById)
router.post('/', validateDepartment, createDepartment)
router.put('/:id', validateDepartment, updateDepartment)
router.delete('/:id', deleteDepartment)

module.exports = router