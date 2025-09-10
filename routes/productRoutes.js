const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Multer setup for image upload
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + path.extname(file.originalname));
	}
});
const upload = multer({ storage: storage });

// Create a new product with image upload
router.post('/', upload.single('productImage'), productController.createProduct);

// Get all products
router.get('/', productController.getProducts);

// Get a single product by ID
router.get('/:id', productController.getProductById);

// Update a product by ID
router.put('/:id', productController.updateProduct);

// Delete a product by ID
router.delete('/:id', productController.deleteProduct);

module.exports = router;
