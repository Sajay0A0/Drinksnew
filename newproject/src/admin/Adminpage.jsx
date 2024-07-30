import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { myContext } from "../Folder1/Context";

import "../folderstyles/Admin.css"


export default function Adminpage(){

    // const [product,setProduct]=useState([]);
    const {product,setProduct}=useContext(myContext)
    const [productName,setProductName]=useState('');
    const [productPrice,setProductPrice]=useState('');
    const [description,setDescription]=useState('');
    const [specify,setSpecify]=useState('');
    const [editProduct,setEditProduct]=useState(null);

    useEffect(()=>{
        fetchProduct();
    },[]);

    const fetchProduct=async()=>{
        try {
            const response =await axios.get('http://localhost:5000/api/items/get');
            setProduct(response.data);

        } catch (error) {
            console.error('error fetch product:',error);
            
        }
    };
    console.log("prod",product);

    const addProduct=async()=>{
        try {
           await axios.post('http://localhost:5000/api/items/add',{ prod_name:productName,price:productPrice,description:description,specify:specify},
           (req,res)=>console.log(req.body));
           fetchProduct()

           setProductName('');
           setProductPrice('');
           setDescription('');
           setSpecify('');

        } catch (error) {
            console.error('error adding product',error );
            
        }
    };

    const editproduct = (product) => {
        setEditProduct(product._id);
        setProductName(product.prod_name);
        setProductPrice (product.price);
        setDescription(product.description);
        setSpecify(product.specify);
      
      };
    
      const cancelEdit=()=>{
        setEditProduct(null);
        setProductName('');
        setProductPrice('');
        setDescription('');
        setSpecify('');
      
      };

      const updateProduct=async (id,updateName,updatePrice,updateDescription,updateSpecify)=>{
        try {
            await axios.put(`http://localhost:5000/api/items/update/${id}`,{prod_name:updateName,price:updatePrice,description:updateDescription,specify:updateSpecify});
            fetchProduct();
            cancelEdit();
        } catch (error) {
            console.error('error updating product:',error);

        }
      };
      const confirmDelete=(id,deleteProdName)=>{
        if (window.confirm(`are you sure you want to delete this product,"${deleteProdName}"?`)) {
            deleteProduct(id);
            console.log("deleteProduct",id);
        }
      };

      const deleteProduct =async(id)=>{
        try {
            await axios.delete(`http://localhost:5000/api/items/delete/${id}`);
            fetchProduct();
        } catch (error) {
            console.error('error deleting product:',error);
            
            
        }
      };


    return(
        <div>
            {/* <Adminnavbar/> */}

          <div>
            <h2 className="text-center" style={{marginTop:'30px'}}>Add Product</h2>
            <form style={{marginTop:'20px'}}>
                <input className="edit" type="text" placeholder="product name" value={productName}
                onChange={(e)=> setProductName (e.target.value)}/>

                <input className="edit"  type="text" placeholder="product price" value={productPrice}
                onChange={(e)=> setProductPrice (e.target.value)}/>

                <input style={{width:'500px'}} className="edit" type="text" placeholder=" description" value={description}
                onChange={(e)=> setDescription (e.target.value)}/>

                <input style={{width:'500px'}} className="edit" type="text" placeholder=" specify" value={specify}
                onChange={(e)=> setSpecify (e.target.value)}/>
       

                <button className="edit-btn" onClick={addProduct}> ADD </button>
            </form>

          </div>
          <h2  style={{textAlign:'center',marginTop:'60px'}}>All Products</h2>
          <div className="ul-decoration">
        <ol style={{margin:'0 0 0 20px'}}>
          {product.map((product)=>(
            <li key={product._id}>
                <div>
                    {editProduct === product._id ?(
                        <>
                        <input className="edit" type="text" placeholder="product name" value={productName} 
                        onChange={(e)=> setProductName(e.target.value)}/>

                        <input className="edit" type="text" placeholder="product price" value={productPrice} 
                        onChange={(e)=>setProductPrice(e.target.value)}/>

                        <input className="edit" type="text" placeholder="description" value={description} 
                        onChange={(e)=> setDescription(e.target.value)}/>

                        <input className="edit" type="text" placeholder="specify" value={specify} 
                        onChange={(e)=> setSpecify(e.target.value)}/>


                        <button className="btn3" onClick={()=> updateProduct (product._id,productName,productPrice,description,specify)}>Update</button>
                        <button className="btn4" onClick={cancelEdit}>Cancel</button>
                        </>
                    ):(
                        <div className="adnav">
                        <div className="prod-content">
                        <span className="span" style={{paddingLeft:'20px'}}>{product.prod_name}</span>
                        <span className="span"> - ₹{product.price} /-</span>
                        <span className="span">- {product.description} -</span>
                        <span className="span">- {product.specify} -</span>
                        </div>
                        <div className="buttons"> 
                        <button className="btn1" onClick={()=> editproduct(product)}>Edit</button>
                        <button className="btn2"  onClick={()=> confirmDelete(product._id,product.prod_name)}> Delete </button>
                        </div>
                        </div>
                    )}
                </div>
            </li>
          ))}
          </ol>
          </div>
          
        </div>
    )
}


