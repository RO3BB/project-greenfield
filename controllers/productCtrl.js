const Products = require('../models/productModel.js');


const productCtrl = {

   createProduct: (req, res) => {
    const title = req.body.title
    const product_id = req.body.product_id
    const image = req.body.image
    const description = req.body.description
    const price = req.body.price

    const newProduct = new Products({ title ,product_id, image, description, price}) 

    newProduct.save().then((result) => {
        res.send(result)
    }).catch(err => console.log(err))

    }
}

module.exports = productCtrl;