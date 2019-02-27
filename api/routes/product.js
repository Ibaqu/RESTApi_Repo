const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'Handling GET requests on /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message : 'Handling POST requests on /products'
    });
});

router.get('/:productId',(req, res, next) => {
    const productId = req.params.productId;
    if(productId == 'special') {
        res.status(200).json({
            message : 'You found the special ID',
            id : productId
        });
    };
    res.status(200).json({
        message : 'Handling get request with productId on /products'
        
    });
});

router.patch('/:productId',(req, res, next) => {
    const productId = req.params.productId;
    res.status(200).json({
        message : 'Updated product',
        id : productId
    });
});

router.delete('/:productId',(req, res, next) => {
    const productId = req.params.productId;
    res.status(200).json({
        message : 'Deleted product',
        id : productId
    })
});

module.exports = router;