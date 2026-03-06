const validateDepartment = (req, res, next) => {
    const { name } = req.body

    if (!name) {
        return res.status(400).json({ message: 'Name field is required' })
    }

    next()
}

module.exports = { validateDepartment }