import "./Header.css";
import { assets } from "../../assets/assets";
import Dropdown from "../Dropdown/Dropdown";
import Firebase from "../Firebase/FirebaseAuth";

import { useNavigate } from "react-router-dom";
import ShowOnHOme from "../ShowOnHome/ShowOnHOme";

function Header() {
  //---------------navigate to showonhome------------
  const navigate = useNavigate();
  // const handleCartItem=()=>{
  //   navigate('/showonhome', { replace: true, state:  "yes"  });
  // }

  const signInAccount = () => {
    window.open("/sellerlogin", "_self");
  };
function reloadBtn(){
  window.location.reload();
}

  return (
    <>
      <div className="headerEle">
        <div id="header" className="logo">
          <img id="reloadButton" onClick={reloadBtn} src={assets.logo2} alt="logo" />
        </div>
        <div id="header" className="div2">
          <p>Shop</p>
          <div className="verticalLine"></div>
          <form className="headerform" action="">
            <input placeholder="What are you looking for?..." type="text" />
            <button type="submit">Search</button>
          </form>
        </div>

        <ul className="menu">
          <li className="menu-item">
            <a href="">Cart Items</a>
          </li>
          <li className="menu-item">
            <a href="/footer">About</a>
          </li>
          <li className="menu-item">
            <a href="">Contact</a>
          </li>
          <li className="menu-item dropdown">
            <Firebase />
          </li>
        </ul>

        {/* <button className="headerbtn">Cart</button> */}
      </div>
    </>
  );
}

export default Header;
