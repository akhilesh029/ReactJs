  import React,{useState,useEffect} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import Header from "../../componets/Header/Header";
import './WelcomePage.css'
import { useNavigate } from "react-router-dom";
import SellerPage from "../SellerPage/SellerPage";

const WelcomePage = (props) => {
    const [users, setUsers] = useState([])
    

    const location = useLocation();
    // console.log(location.state.email)
    const userEmail = location.state.email
    console.log(userEmail)
   

    const navigate = useNavigate()
    const handleClick=()=>{
        navigate('/sellerpage', {replace:true, state:{userEmail}})
    }

     // request to userdata from database
   useEffect(()=>{
    axios.get('http://localhost:3000/seller')
    .then(users => setUsers(users.data))
    .catch(err => console.log(err))
   },[])


  return (

  <div className="welcome-container">
  <ul>
    {users.map((item) => {
      if (item.email === userEmail) {
        return (
          <li key={item.email}> {/* Added key for list items */}
            <div className="welcomeChildiv">
              <img className="profilepicture" src={assets.polo} alt="" />
              <h1 className="welcome">Welcome</h1>
              <p className="welcomeText">
                Hi <b>{item.ownerName}</b>, welcome to <b>DASHO</b>!
              </p>
              <p className="welcomeText">
                We're thrilled to have you join our platform.
              </p>
              <p className="welcomeText">
                Let's make some sales together.
              </p>
              <button className="letsgo" onClick={handleClick}>Let's Go</button>
            </div>
          </li>
        );
      }
      return null; // Return null if the condition is not met
    })}
  </ul>
</div>

  );
};

export default WelcomePage;
