import {BrowserRouter,Route,Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import NavBar from './components/navbar';
import Login from './screens/login';
import Home from './screens/home';
import Register from "./screens/register";
import ProtectedRoute from './utils/ProtectedRoute';
import Footer from "./components/footer";
import MobileMenu from "./components/mobilemenu";
import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();
  const user = useSelector((state) => state.user);

  
  return (
    <>
    <NavBar/>
    {user?.state?.isToggleButton ? <MobileMenu/> : null}
    <BrowserRouter>
    <Routes>
        <Route path="/" element={
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
     }/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
