const Products = require('./model/productSchema');
const products = require('./constants/product');

const DefaultData = async() => {

    try{
        await Products.deleteMany({});
        await Products.insertMany(products);
        console.log(`Data imported successfully`);

    } catch(err){
        console.log('Error: ', err.message);
    }

};

module.exports = DefaultData;