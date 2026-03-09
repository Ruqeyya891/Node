const Product = require('../models/productModel');

// Bütün məhsulları gətir (search və sort ilə)
const fetchAllProducts = async (req, res) => {
    try {
        const { search, sort } = req.query;
        let filter = {};
        
        if (search) {
            filter.title = { $regex: search, $options: 'i' };
        }
        
        let query = Product.find(filter).populate('category', 'name description');
        
        if (sort === 'asc' || sort === 'desc') {
            query = query.sort({ price: sort === 'asc' ? 1 : -1 });
        }
        
        const products = await query;
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ID-yə görə məhsul gətir
const fetchProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('category', 'name description');
        
        if (!product) {
            return res.status(404).json({ message: 'Məhsul tapılmadı' });
        }
        
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Yeni məhsul əlavə et
const insertProduct = async (req, res) => {
    try {
        const { title, description, price, stock, category } = req.body;

        if (!title) {
            return res.status(400).json({ message: 'Başlıq məcburidir' });
        }

        if (!price) {
            return res.status(400).json({ message: 'Qiymət məcburidir' });
        }

        if (!category) {
            return res.status(400).json({ message: 'Kateqoriya məcburidir' });
        }

        const product = new Product({
            title,
            description,
            price,
            stock,
            category
        });

        await product.save();
        await product.populate('category', 'name description');
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Məhsulu yenilə
const modifyProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ).populate('category', 'name description');
        
        if (!product) {
            return res.status(404).json({ message: 'Məhsul tapılmadı' });
        }
        
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Məhsulu sil
const removeProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        
        if (!product) {
            return res.status(404).json({ message: 'Məhsul tapılmadı' });
        }
        
        res.status(200).json({ message: 'Məhsul silindi' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    fetchAllProducts,
    fetchProductById,
    insertProduct,
    modifyProduct,
    removeProduct
};