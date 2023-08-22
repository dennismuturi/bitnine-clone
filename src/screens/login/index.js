import { useState,useEffect } from "react";
import {Navigate, useLocation, Link} from "react-router-dom"
import axios from "axios";
import "./index.css"
import {useSelector,useDispatch} from "react-redux";
import { setUser } from "../../redux/slice/userSlice";
import LoadingSpinner from "../../components/spinner";
import { useTranslation } from "react-i18next";

const Login =() => {

const { t, i18n } = useTranslation();

const user = useSelector((state) => state.user);
const dispatch = useDispatch();
const [formData, setFormData]= useState({
    email:'',
    password:''
})

const [message, setMessage] = useState({
  message:'',
  redirect:false,
  color:'',

})

const  [progress, setProgress] = useState(false)

const handleFormSubmit = (e) => {
    e.preventDefault();
    setProgress(true);
    axios.post("https://auth-4xlh.onrender.com/login", {
      email: formData.email,
      password: formData.password
    })
    .then((response) => {
      setProgress(false)
      dispatch(setUser(response.data.email))
      
      console.log(response);
    }).catch(function (error) {
        setProgress(false)
        setMessage({
          message: "Wrong Email or Password",
          color: "red"
      })
        console.log(error);
      });
    
}


let location = useLocation();

if(user.user.email) {
    return <Navigate to="/" state={{ from: location}} replace />
}


    return (
        <div className="container">
    
       <form onSubmit={(e)=>handleFormSubmit(e)}>
       <h1 className="heading">{t('loginhere')}
       <span>
        {progress? <LoadingSpinner/> :null}
       </span></h1>
       {message? <h3 className="heading" style={{color:message.color}}>{message.message}</h3> :
       null }
        <input type="email" 
        placeholder={t('enteryouremail')}
        onChange={(e)=>setFormData({...formData,
         email: e.target.value})}
          required/>

        <input type="password"
         placeholder={t('enteryourpassword')}
         onChange={(e)=>setFormData({...formData, password: e.target.value})} 
         
         required/>
       <button>
       {t('login')}
       </button>
       <span class="psw">{t('noaccountyet')}?  <Link to="/register">{t('registerhere')}</Link></span>
       </form>
        </div>
    )
}

export default Login;