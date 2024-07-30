import { useContext } from "react";
import { myContext } from "./Context";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../folderstyles/Drinks.css';  // Import your custom CSS file

export default function Cocktail() {
  const { product } = useContext(myContext);

  // Debugging: Log the entire product array
  console.log("Product data:", product);

  const cocktail = product.filter((p) => p.specify === "cocktail ");

  // Debugging: Log the filtered cocktail array
  console.log("Filtered cocktail data:", cocktail);

  return (
    <div>
      <div className="mt-5" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="prod-div-1">
          <h1 className="mt-4 prod-div-2" >
          <style>
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@100..900&family=Oswald:wght@200..700&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Space+Grotesk:wght@300..700&display=swap');
</style>
            <b className="head-1">____</b> <p className="titles">BRUNCH COCKTAILS</p><b className="head-1">____</b>
          </h1>
          <div className="container-fluid">
            <div className="row">
            {cocktail.map((product) => (
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
    </div>  );
}
