import './Navbar.css'
import { assets } from '../../../assets/assets'

function Navbar(){
    return(
        <>
       
           <div className="categories">
            {/* //<ul className='categories' > */}
                <li  className="ctgtype"> 
                    <a href="">
                        <img src={assets.women} alt="" />
                        <span>Ladies Wear</span>
                    </a>
                </li>
                
                <li className="ctgtype">
                    <a href="">
                            <img src={assets.men} alt="" />
                      
                        <span>Men Wear</span>
                    </a>
                </li>
                <li className="ctgtype">
                    <a href="">
                       
                            <img src={assets.women} alt="" />
                       
                        <span>Footwear</span>
                    </a>
                </li>
                <li className="ctgtype">
                    <a href="http">
                       
                            <img src={assets.men} alt="" />
                        
                        <span>Beuty Products</span>
                    </a>
                </li>
                <li className="ctgtype">
                    <a href="http">
                        
                            <img src={assets.women} alt="" />
                       
                        <span>Pet Foods</span>
                    </a>
                </li>
                <li className="ctgtype">
                    <a href="http">
                    
                            <img src={assets.men} alt="" />
                       
                        <span>Electronics</span>
                    </a>
                </li>
                <li className="ctgtype">
                    <a href="http">
                       
                        <img src={assets.women} alt="" />
                        <span>Mobile Accesories</span>
                    </a>
                </li>
                <li className="ctgtype">
                    <a href="http">
                      
                            <img src={assets.men} alt="" />
                       
                        <span>Home doctor</span>
                    </a>
                </li>
                <li className="ctgtype">
                    <a href="http">
                        
                            <img src={assets.women} alt="" />
                       
                        <span>Lights</span>
                    </a>
                </li> 
               
            {/* </ul> */}
           </div>
        </>
    )
}

export default Navbar