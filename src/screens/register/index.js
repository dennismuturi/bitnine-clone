import { useState,useEffect } from "react";
import {Navigate, useLocation, Link, redirect, } from "react-router-dom"
import axios from "axios";
import "./index.css"
import {useSelector,useDispatch} from "react-redux";
import { setUser } from "../../redux/slice/userSlice";
import LoadingSpinner from "../../components/spinner";
import { useTranslation } from "react-i18next";

const Register =() => {

const { t, i18n } = useTranslation();

const user = useSelector((state) => state.user);
const dispatch = useDispatch();
let location = useLocation();

const [message, setMessage] = useState({
    message:'',
    redirect:false,
    color:'',

})
const [formData, setFormData]= useState({
    email:'',
    password:''
})

const [progress,setProgress]= useState(false)

const handleFormSubmit = (e) => {
    e.preventDefault();
    setProgress(true);
    axios.post("https://auth-4xlh.onrender.com/register", {
      email: formData.email,
      password: formData.password
    })
    .then((response) => {
        setMessage({
            message:"User Created Successfully",
            color:'green',
            redirect: true
        });

        setProgress(false)
    
   
      console.log(response);
    }).catch(function (error) {
        
        setMessage({
            message: "Email already registered",
            color: "red"
        })
        setProgress(false)
        console.log(error);
      });
    
}



if(user.user.email) {
    return <Navigate to="/" state={{ from: location}} replace />
}
    return (
        <div className="container">
       
       <form onSubmit={(e)=>handleFormSubmit(e)}>
        
       <h1 className="heading">{t('createanaccount')}</h1>
       <span>{progress? <LoadingSpinner/> : null}</span>
       {message? <h3 className="heading" style={{color:message.color}}>{message.message}</h3> :
       null }
        {!message.redirect ?
        <>
        <input 
        type="email"
          placeholder={t('enteryouremail')}
          onChange={(e)=>setFormData({...formData, email: e.target.value})} required/>

        <input
         placeholder={t('enteryourpassword')}
         type="password" onChange={(e)=>setFormData({...formData, password: e.target.value})} required/>
       <button>
       {t('register')}
       </button>
       <span class="psw">{t('alreadyregistered')}? <Link to="/login">{t('loginhere')}</Link></span>
       </>
       : <Link style={{fontSize: "30px",textAlign:"center"}}to="/login">Click Here to Login</Link>
    }
       </form>
      
        </div>
    )
}

export default Register;