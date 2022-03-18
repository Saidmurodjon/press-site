import { Routes,Route} from "react-router-dom";
import Home from "../view/home/Home";

function Router(){
    
    return (
        <>
         <Routes>
            <Route path='/' element={<Home />} />
           
         </Routes>
        </>
       );

}

export default Router