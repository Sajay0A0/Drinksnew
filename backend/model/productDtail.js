const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({

    prod_name:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    specify:{type:String,required:true},


});

const Product=mongoose.model('products',productSchema);
module.exports=Product; 