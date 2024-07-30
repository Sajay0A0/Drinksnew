import { useContext } from "react";
import { myContext } from "./Context";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../folderstyles/Drinks.css';  // Import your custom CSS file

export default function Drinks() {
  const { product } = useContext(myContext);

  const drinks = product.filter((p) => p.specify === 'drinks');

  return (
    <div >
      <div className="mt-5 prod-div" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="prod-div-1" >
          <h1 className="mt-5 prod-div-2" >
            <b className="head-1" >____</b> <p className="titles">DRINKS </p><b className="head-1" >____</b>
          </h1>
          <div className="container-fluid">
            <div className="row">
            {drinks.map((product) => (
              <div className="col-12 col-md-6 " key={product.id} >
                <div className="p-3" style={{display:'flex'}}>
                  <p className="product-name">{product.prod_name}</p>
                  <p className="product-price" >$ {product.price}</p>
                </div>
                <p className="product-description mb-3">{product.description}</p>
              </div>
            ))}
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
