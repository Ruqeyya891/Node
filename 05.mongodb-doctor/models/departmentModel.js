const mongoose = require('mongoose')
const { Schema } = mongoose

const DepartmentSchema = new Schema({
    name: String,
    description: String,
}, { timestamps: true, versionKey: false })

const DepartmentModel = mongoose.model('Department', DepartmentSchema)

module.exports = DepartmentModel