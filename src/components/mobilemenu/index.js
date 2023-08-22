import {useSelector,useDispatch} from "react-redux";
import { removeUser} from "../../redux/slice/userSlice";

import "./index.css"
const MobileMenu = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(removeUser())
    }

    return (
        <nav className="mobilemenu">
       <ul>
        <li>product</li>
        <li>USE CASES</li>
        <li>resources</li>
        <li>blog</li>
        <li>COMPANY</li>
        <li>IR</li>
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
        </nav>
    )
}

export default MobileMenu;