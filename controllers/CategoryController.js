const Category = require("../models/Category");

class CategoryController{
    async create(req, res){
        try {
            const category = await Category.create(req.body);
            res.status(201).json(category);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async get(req, res){
        try {
            const categories = await Category.find();
            res.status(201).json(categories);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async delete(req, res){
        try {
            await Category.findByIdAndDelete(req.params.id);
            res.status(201).json({
                message: 'Category deleted successfully.'
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = CategoryController;
