import React, { useEffect, useState } from 'react';
import { myContext } from "./Folder1/Context";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Usenavbar from './Folder1/Navbar';
import Menu from './Folder1/Menu';
import Drinks from './Folder1/Drinks';
import axios from 'axios';
import Adminpage from './admin/Adminpage';
import Cocktail from './Folder1/Cocktails';
import Flavor from './Folder1/Flavor';
import Note from './Folder1/Note';
import Footer from './Folder1/Footer';

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/items/get');
      setProduct(response.data);
    } catch (error) {
      console.error('error fetching product:', error);
    }
  };

  const val = {
    product, setProduct
  };


  return (
    <div>
      <myContext.Provider value={val}>
      <BrowserRouter>
        <Routes>
          <Route path="/navbar" element={<Usenavbar />} />
          <Route path='/' element={<Menu/>}/>
          <Route path='/drinks' element={<Drinks/>}/>
          <Route path='/cocktail' element={<Cocktail/>}/>
          <Route path='/flavor' element={<Flavor/>}/>
          <Route path='/note' element={<Note/>}/>
          <Route path='/footer' element={<Footer/>}/>
          <Route path='/admin' element={<Adminpage/>}/>
        </Routes>
      </BrowserRouter>
      </myContext.Provider>
    </div>
  );
}

export default App;
