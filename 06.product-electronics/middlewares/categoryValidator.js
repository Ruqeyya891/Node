const categoryValidator = (req, res, next) => {
    const { name } = req.body;
    
    if (!name || name.trim() === '') {
        return res.status(400).json({ 
            message: 'Kateqoriya adı boş ola bilməz' 
        });
    }
    
    next();
};

module.exports = categoryValidator;