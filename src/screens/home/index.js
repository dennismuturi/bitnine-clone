import { useState,useEffect } from "react";
import {Navigate, useLocation} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux";

const Home = () => {
    const user = useSelector((state) => state.user);
  

 

    return (
        <div>
           <h1><b>Welcome: </b><span>{user?.user?.email}</span></h1>

           
        </div>
    )
}

export default Home;