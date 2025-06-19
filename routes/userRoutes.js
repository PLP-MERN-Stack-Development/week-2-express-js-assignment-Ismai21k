const express = require('express')
const router = express.Router()
const validateProduct = require('../middleware/validateProduct')
const apiKey = require('../middleware/apikeyAuth')
const {getAllProducts, getSpecificProduct,searchByCategory,pagination,searchByName,getStatistics,insertProduct,updateProduct,deleteProduct} = require('../controller/userController')

router.get('/api/products', apiKey, getAllProducts)
router.get('/api/products/:id', getSpecificProduct)
router.get('/api/search', searchByCategory)
router.get('/api/paginate', pagination)
router.get('/api/searchbyname', searchByName)
router.get('/api/productstats', getStatistics)
router.post('/api/products', validateProduct,insertProduct)
router.put('/api/products/:id',validateProduct,updateProduct)
router.delete('/api/products/:id', deleteProduct)

module.exports = router;