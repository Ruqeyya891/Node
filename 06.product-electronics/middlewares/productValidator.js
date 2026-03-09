const productValidator = (req, res, next) => {
    const { title, price } = req.body;
    
    if (!title || title.trim() === '') {
        return res.status(400).json({ 
            message: 'Məhsul başlığı boş ola bilməz' 
        });
    }
    
    if (price === undefined || price === null) {
        return res.status(400).json({ 
            message: 'Qiymət məcburidir' 
        });
    }
    
    if (typeof price !== 'number' || price < 0) {
        return res.status(400).json({ 
            message: 'Qiymət mənfi ola bilməz' 
        });
    }
    
    next();
};

module.exports = productValidator;