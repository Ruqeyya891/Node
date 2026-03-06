const validateDoctor = (req, res, next) => {
    const { name, surname, email, age, position } = req.body

    if (!name || !surname || !email || !age || !position) {
        return res.status(400).json({ message: 'All fields are required: name, surname, email, age, position' })
    }

    if (typeof age !== 'number' || age < 0) {
        return res.status(400).json({ message: 'Age must be a positive number' })
    }

    next()
}

module.exports = { validateDoctor }