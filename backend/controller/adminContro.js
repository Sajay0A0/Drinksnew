const Product=require('../model/productDtail')
const mongoose =require('mongoose');
const bcrypt=require('bcryptjs');
const jwt =require('jsonwebtoken');
const jwtSecretKey ="admin123";





const addProduct =async (req,res)=>{
    try {
        const { prod_name ,price, description,specify,}=req.body;

        const product=new Product({prod_name:prod_name ,price:price, description:description,specify: specify,});
        await product.save();
        res.json({message:"product added successfully"});
    } catch (error) {
        res.status(400).json({error:error.message});
        
    }
  };

  const updateProduct = async (req, res) => {
    try {
        const {id}=req.params;
        const { prod_name ,price, description, specify}=req.body;
        const product =await Product.findByIdAndUpdate(
            id,
            { prod_name ,price, description,specify},
            {new:true}
        );
        res.json(product)
    } catch (error) {
        res.status(400).json({error:error.message});
        
    }
  };

  const deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params
        await Product.findByIdAndDelete(id);
        res.json({message:"product deleted successfuly"});

    } catch (error) {
        res.status(400).json({error:error.message});
    }
  };

  const getAllProduct=async(req,res)=>{
    try {
        const product=await Product.find();
        res.json(product)
    } catch (err) {
        res.status(500).json({error:err.message})
        
    }
  };




  module.exports={
    addProduct,
    updateProduct,
    deleteProduct,
    getAllProduct
  }
