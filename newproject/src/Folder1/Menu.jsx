import Usenavbar from "./Navbar";
import "../folderstyles/Menu.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "./Context";
import Drinks from "./Drinks";
import Cocktail from "./Cocktails";
import Flavor from "./Flavor";
import Note from "./Note";
import Footer from "./Footer";

export default function Menu(){



    return(
        <div >
            <Usenavbar/>
            <div className="menu-img">
                <img src="https://img.freepik.com/free-photo/food-with-ingredients_1220-4884.jpg?t=st=1722229873~exp=1722233473~hmac=83bd4f734667cb4b618f218d3c701fd1928ae94b429df30e6a23094ac81ce629&w=996"
                style={{width:'100vw',height:'50vh'}} alt="" />
                <div className="menu-head">
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@100..900&family=Oswald:wght@200..700&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Space+Grotesk:wght@300..700&display=swap');
                </style>


                <div className="h1-1"> <p style={{display:'flex',}}>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an orden use the "Order Online" button located below the menu.</p> </div>

                <h1 className="menu-title">MENU</h1>
                </div>
                <div className="menu-div" style={{backgroundColor:'black'}}>
                <div className="mb-4 btn-div" >
                    <Link className="mt-4 btn border-primary rounded-0 me-2 link-txt " >FOOD</Link>
                    <Link className="mt-4 btn border-primary rounded-0 me-2 link-txt" to='/drinks'>DRINKS</Link>
                    <Link className="mt-4 btn border-primary rounded-0 me-2 link-txt">BRUNCH</Link>

                </div>
                <div>
                    <Drinks/>
                </div>
                <div>
                    <Cocktail/>
                </div>
                <div>
                    <Flavor/>
                </div>
                <div className="mt-4 justify-content-center " style={{display:'flex'}}>
                    <button className="bg-primary border-0 text-white" style={{width:'150px',height:'40px',fontWeight:'500'}}>ORDER ONLINE</button>
                </div>

                <div>
                    <Note/>
                </div>

                <div>
                    <Footer/>
                </div>
               

        </div>
        </div>
        </div>
    )
}