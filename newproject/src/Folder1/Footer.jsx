import "../folderstyles/Footer.css"
import { GiRotaryPhone } from "react-icons/gi";
import { IoMailOutline } from "react-icons/io5";
import { FiFacebook } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";





export default function Footer(){
    return(
        <div style={{backgroundColor:'black'}}>
            <div className="footer-container mt-5" style={{display:'flex',justifyContent:'center',gap:'11px',padding:'5% 0'}}>
                <div className="col-lg-4 me-0 footer-div">
                    <h5 className="text-primary foot-head">CONNECT WITH US</h5>
                    <span className="text-secondary" style={{display:'flex',gap:'10px',textAlign:'center',justifyContent:'center'}}><GiRotaryPhone style={{fontSize:'30px',}}/>+1 470-788-8255</span>
                    <span className="text-secondary" ><p style={{display:'flex',gap:'10px',textAlign:'center',justifyContent:'center'}}> <IoMailOutline style={{fontSize:'25px',}}/>email@42brandgrill.com</p></span>
                </div>
                <div className="footer-logo">
                    <img src="https://assets.static-upwork.com/org-logo/1376569498387136512"
                    alt="Logo" />
                </div>
                <div className="col-lg-4 me-0 footer-div">
                <h5 className="text-white justify-content-center"  style={{display:'flex',gap:'10px',padding:'50px 0 0 0'}}><p className="text-primary">DEEP</p>NET SOFT</h5>                   
                 <span className="text-secondary">
                    <div style={{display:'flex',margin:'0 0 0 30%',gap:'20px'}}>
                        <FiFacebook/>
                        <LuTwitter/>
                        <AiOutlineYoutube/>
                        <FaInstagram/>

                    </div>
                 </span>
                </div>
                <div className="col-lg-4 me-0 footer-div">
                    <h5 className="text-primary foot-head">FIND US</h5>
                    <span className="text-secondary" style={{display:'flex',gap:'10px',textAlign:'center',justifyContent:'center'}}><IoLocationOutline style={{fontSize:'25px'}}/>327 Memorial Dr SE.Atlanta</span>
                    <span className="text-secondary"><p style={{display:'flex',gap:'10px',textAlign:'center',justifyContent:'center'}}>GA 30312, USA</p></span>
                </div>
            </div>
        </div>
    )
}
