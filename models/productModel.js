const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_id:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    title:{
        type: String,
        unique: true,
        trim: true
    },
    price:{
        type: Number,
        unique: true,
        trim: true
    },
    description:{
        type: String,
        required: true
    },
    images:{
        type: Object,
        require: true
        
    },
    content:{
        type: String,
        require: true
        
    },
    sold:{
        type: Number,
        default: 0
    },
    cheched:{
        type: Boolean,
        default: false
    }
    }, {
        timestamps: true
})

module.exports = mongoose.model("Products", productSchema);