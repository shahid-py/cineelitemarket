import {Routes, Route} from "react-router-dom"
import './App.css';
import {Header} from './components/Header';
import {Products} from "./pages/index"
import {Watchlist} from "./pages/index"
import {Signup} from "./pages/index"
import { Packages } from "./pages/Packages";
import PrivateRoute from "./PrivateRoute"
function App() {
  return (
    <div>
   
 <Header/>
 <Routes>
      <Route exact path="/" element={<Products />} />
      <Route exact path="/watchlist" element={<PrivateRoute/>} >
      <Route exact path="/watchlist" element={<Watchlist/>} />
      </Route>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/packages" element={<Packages/>}/>
 </Routes>
 
    </div>
  );
} 

export default App;
