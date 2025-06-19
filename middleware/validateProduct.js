// middleware/validateProduct.js
module.exports = function(req, res, next) {
    const { name, description,price, category, inStock} = req.body;

    if (!name || typeof name !== 'string') {
        return res.status(400).json({ error: 'Product name is required and must be a string.' });
    }

    if (price === undefined || typeof price !== 'number' || price <= 0) {
        return res.status(400).json({ error: 'Product price is required and must be a positive number.' });
    }

    next();
}


