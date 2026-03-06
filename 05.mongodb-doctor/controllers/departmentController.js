const DepartmentModel = require('../models/departmentModel')

// GET all departments
const getAllDepartments = async (req, res) => {
    try {
        const departments = await DepartmentModel.find()
        res.status(200).json(departments)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// GET department by ID
const getDepartmentById = async (req, res) => {
    try {
        const department = await DepartmentModel.findById(req.params.id)
        if (!department) {
            return res.status(404).json({ message: 'Department not found' })
        }
        res.status(200).json(department)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// CREATE department
const createDepartment = async (req, res) => {
    try {
        const department = await DepartmentModel.create(req.body)
        res.status(201).json(department)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// UPDATE department
const updateDepartment = async (req, res) => {
    try {
        const department = await DepartmentModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!department) {
            return res.status(404).json({ message: 'Department not found' })
        }
        res.status(200).json(department)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// DELETE department
const deleteDepartment = async (req, res) => {
    try {
        const department = await DepartmentModel.findByIdAndDelete(req.params.id)
        if (!department) {
            return res.status(404).json({ message: 'Department not found' })
        }
        res.status(200).json({ message: 'Department deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getAllDepartments, getDepartmentById, createDepartment, updateDepartment, deleteDepartment }