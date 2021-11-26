const express = require('express');
const router = express.Router();
require('../db/conn');
const Products = require('../model/productSchema');


//get products from database
router.get('/products', async(req,res) => {
    try{
        const items = await Products.find({});
        res.json(items);

    }catch(err){
        console.log('Error: ', err.message);
    }

});


//get single product detail
router.get('/product/:id', async(req,res) => {
    try{
        const product = await Products.findOne({'id': req.params.id});
        console.log(product);
        res.json(product);

    }catch(err){
        console.log('Error: ',err.message);
    }

});


module.exports = router;