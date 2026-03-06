const DoctorModel = require('../models/doctorModel')

// GET all doctors
const getAllDoctors = async (req, res) => {
    try {
        const doctors = await DoctorModel.find().populate('department')
        res.status(200).json(doctors)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// GET doctor by ID
const getDoctorById = async (req, res) => {
    try {
        const doctor = await DoctorModel.findById(req.params.id).populate('department')
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' })
        }
        res.status(200).json(doctor)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// CREATE doctor
const createDoctor = async (req, res) => {
    try {
        const doctor = await DoctorModel.create(req.body)
        res.status(201).json(doctor)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// UPDATE doctor
const updateDoctor = async (req, res) => {
    try {
        const doctor = await DoctorModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('department')
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' })
        }
        res.status(200).json(doctor)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// DELETE doctor
const deleteDoctor = async (req, res) => {
    try {
        const doctor = await DoctorModel.findByIdAndDelete(req.params.id)
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' })
        }
        res.status(200).json({ message: 'Doctor deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getAllDoctors, getDoctorById, createDoctor, updateDoctor, deleteDoctor }