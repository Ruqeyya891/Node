const express = require('express')
const router = express.Router()
const { getAllDoctors, getDoctorById, createDoctor, updateDoctor, deleteDoctor } = require('../controllers/doctorController')
const { validateDoctor } = require('../middlewares/doctorValidator')

router.get('/', getAllDoctors)
router.get('/:id', getDoctorById)
router.post('/', validateDoctor, createDoctor)
router.put('/:id', validateDoctor, updateDoctor)
router.delete('/:id', deleteDoctor)

module.exports = router