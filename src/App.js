import {Routes, Route} from "react-router-dom"
import './App.css';
import {Header} from './components/Header';
import {Products} from "./pages/index"
import {Watchlist} from "./pages/index"
import { Kit } from "./pages/index";
import {Signup} from "./pages/index"
import { Login } from "./pages/index";
import { ProductDetails } from "./pages/index";
import { LandingPage } from "./pages/LandingPage";
import PrivateRoute from "./PrivateRoute"
import {Packages} from "./pages/Packages"
import { Compare } from "./pages/Compare";
import { History } from "./pages/History";
function App() {
  return (
    <div>
   
 <Header/>
 <Routes>
 <Route path="/" element={<LandingPage/>} />
       <Route path="/explore" element={<PrivateRoute />} >
       <Route path="/explore" element={<Products />} />
       </Route>
       <Route path="/login" element={<Login/>}/>
       <Route path="/product/:productId" element={<ProductDetails />} />
       <Route path="/watchlist" element={<PrivateRoute/>} >
        <Route path="/watchlist" element={<Watchlist/>} />
        </Route>
        <Route path="/kit" element={<PrivateRoute/>} >
        <Route path="/kit" element={<Kit/>} />
        </Route>
        <Route path="/compare" element={<PrivateRoute/>} >
        <Route path="/compare" element={<Compare/>} />
        </Route>
        <Route path="/history" element={<PrivateRoute/>} >
        <Route path="/history" element={<History/>} />
        </Route>
       <Route path="/signup" element={<Signup/>}/>
       <Route exact path="/packages" element={<Packages/>}/>
  </Routes>
 
    </div>
  );
}

export default App;
