import { useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import { removeUser, setToggleButton,resetToggleButton, } from "../../redux/slice/userSlice";
import './index.css';
import logo from '../../assets/bitnine-logo_.png'
import { useTranslation } from "react-i18next";

const NavBar = () => {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(removeUser())
    }


    const handleClick = () => {
    !user?.state?.isToggleButton ? dispatch(setToggleButton()) : 
    dispatch(resetToggleButton())
    }
    console.log(user.state.isToggleButton)

     //Calling t and i18n method from useTranslation hook 
  const { t, i18n } = useTranslation();

  //Creating a method to change the language onChnage from select box
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }
    return (
        <>
    <div className="notification">

    <select 
    style={{
        width: 200, 
        float:"left",
        padding:"10px",
        borderRadius: "10px"
        
    }}
    onChange={changeLanguageHandler}>
        <option> Select Language</option>
        <option value="en" >English</option>
        <option value="ko" >한국인</option>
      </select>

        <a href="https://agcloud.bitnine.net/"><small>AgensSQL로 보안 기능들을 강화시키세요.</small> </a>
    </div> 
     
    <div className="topbar">
    
       <a href="/"> <img src={logo}/></a>

        <nav>
         
            <ul className="navbar">
                <li><a href="#">PRODUCTS</a> </li>
                <li><a href="#">USE CASES</a></li>
                <li><a href="#">RESOURCES</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">COMPANY</a></li>
                <li><a href="#">IR</a></li>
                <li>{user?.user?.email ?  
                <input 
                style={{
                    background: "blue",
                    border: "none",
                    width: "50px",
                    height: "25px",
                    color: "white"
            }}
                type="submit"
                  onClick={()=> handleLogout()} value="Logout" />:null }</li>
            </ul>  
          <div className="menu-button">
           <div onClick={()=> handleClick()}> &#9776;</div>
           </div>
         </nav>

      
    </div>
    </>
    )
}

export default NavBar;