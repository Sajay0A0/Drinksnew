import { useContext } from "react"
import { myContext } from "./Context"
import "../folderstyles/Drinks.css"

 export default function Flavor(){
    const {product}=useContext(myContext);
    const flavor = product.filter((p)=>p.specify === 'flavor')

    return(
        <div>
             <div className="mt-5" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="prod-div-1" >
                <img className="flavor-img" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSvU6WeS0uaZ2Mixr8r72VAPVfxz9Pn7HqHYVHamLp6sep5-GaO" alt="pic" />
          <h1 className="mt-3 prod-div-2" >
            <b className="head-1">____</b><p className="titles">HOOKAH FLAVOURS</p><b className="head-1">____</b>
          </h1>
          <div className="mt-3 mb-5" style={{ padding: '20px 0 0 10%',display:'flex',flexWrap:'wrap',gap:'40px' }}>
            {flavor.map((product) => (
              <div key={product.id} >
                <div>
                  <p className="product-name">{product.prod_name}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
          </div>
        </div>
    )
 }