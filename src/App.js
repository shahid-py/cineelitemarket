import {Routes, Route} from "react-router-dom"
import './App.css';
import {Header} from './components/Header';
import {Products} from "./pages/index"
import {Watchlist} from "./pages/index"
import { Kit } from "./pages/index";
import {Signup} from "./pages/index"
import { Login } from "./pages/index";
import { ProductDetails } from "./pages/index";
import PrivateRoute from "./PrivateRoute"
function App() {
  return (
    <div>
   
 <Header/>
 <Routes>
       <Route path="/" element={<Products />} />
       <Route path="/login" element={<Login/>}/>
       <Route path="/product/:productId" element={<ProductDetails />} />
       <Route path="/watchlist" element={<PrivateRoute/>} >
        <Route path="/watchlist" element={<Watchlist/>} />
        </Route>
        <Route path="/kit" element={<PrivateRoute/>} >
        <Route path="/kit" element={<Kit/>} />
        </Route>
       <Route path="/signup" element={<Signup/>}/>
  </Routes>
 
    </div>
  );
}

export default App;
