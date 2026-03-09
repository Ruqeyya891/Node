const Category = require('../models/categoryModel');

// Bütün kateqoriyaları gətir
const fetchAllCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort({ name: 1 });
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ID-yə görə kateqoriya gətir
const fetchCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        
        if (!category) {
            return res.status(404).json({ message: 'Kateqoriya tapılmadı' });
        }
        
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Yeni kateqoriya əlavə et
const insertCategory = async (req, res) => {
    try {
        const { name, description } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'Ad məcburidir' });
        }

        const category = new Category({
            name,
            description
        });

        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Kateqoriyanı yenilə
const modifyCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        
        if (!category) {
            return res.status(404).json({ message: 'Kateqoriya tapılmadı' });
        }
        
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Kateqoriyanı sil
const removeCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        
        if (!category) {
            return res.status(404).json({ message: 'Kateqoriya tapılmadı' });
        }
        
        res.status(200).json({ message: 'Kateqoriya silindi' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    fetchAllCategories,
    fetchCategoryById,
    insertCategory,
    modifyCategory,
    removeCategory
};