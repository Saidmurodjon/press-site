import { Routes,Route} from "react-router-dom";
import Home from "../view/home/Home";
import Login from "../view/components/login/login";
function Router(){
    
    return (
        <>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route  path="/login" element={<Login/>}/>
         </Routes>
        </>
       );

}

export default Router