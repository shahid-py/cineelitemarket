import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useData } from "../context/DataContext";
import { API_URL } from "../utils/index";

import { Toast } from "./Toast";

export function ProductCard({ product }) {
  const {
    state: { kit, watchlist },
    dispatch,
  } = useData();
  const { token } = useAuth();

  const [open, setOpen] = useState(false)
const handleOpen = () => {
  setOpen(!open);
};
  const navigate = useNavigate();
  const [toast, setToast] = useState(false);
  const [bagType, setBagType] = useState("");

  const { _id, typeOfBrand,  name, image } = product;

  const isInKit = kit?.find((kitItem) => kitItem._id === _id);
  const isInWatchlist = watchlist?.find(
    (watchlistItem) => watchlistItem._id === _id
  );

  const kitHandler = async (e) => {
    
    if (!isInKit) {
      try {
        const {
          data: { success },
        } = await axios.post(`${API_URL}/kit`, {
          product: {
            _id,
          
          },
        });

        if (success) {
          dispatch({ type: "ADD_TO_KIT", payload: product });
          setToast(true);
          setBagType("kit");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      navigate("/kit");
    }
  };

  const watchlistHandler = async (e) => {
    e.preventDefault();
    if (!isInWatchlist) {
      try {
        const {
          data: { success },
        } = await axios.post(`${API_URL}/watchlist`, {
          product: {
            _id,
          },
        });

        if (success) {
          setToast(true);
          setBagType("watchlist");
          dispatch({ type: "ADD_TO_WATCHLIST", payload: product });
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      navigate("/watchlist");
    }
  };

  return (
    <>
      {toast && <Toast toast={toast} setToast={setToast} bagType={bagType} />}
      <button  onClick={() => handleOpen(true)
      }>
        <div className="bg-white border border-1 border-cyan-100 w-56 h-80 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col  ">
          

          
            <img src={image} alt="equipment" className="object-fill h-32 mb-1 w-44 mx-6 my-auto "/>
        
          <div className="p-4 my-auto">
           <h5 className=" font-semibold text-center mb-2 text-2xl border-t-4 dark:text-white">{typeOfBrand}</h5>
              
           
           
              <h3 className="mb-2 text-center font-normal tracking-tight    dark:text-white">{name}</h3>
            
          </div>
           {open &&(
             <div className=" absolute flex flex-col my-2 bg-white  border-b-2 border-cyan-100 w-56 h-80 shadow-md text-center">
            <button
                 className="mx-5 mb-2 p-2 rounded-xl mt-12 hover:bg-sky-700 hover:text-white "
                 
               >
                     
                 <div className="">
                 <Link to={`/product/${_id}`} className="link">
                 <span className="mb-2 text-l font-medium mr-2">View details</span>
                 <span className="material-icons-outlined md-light  ">
                 <span class="material-symbols-outlined">
                 open_in_new
                </span>
                 </span>
                 </Link>
                 </div>
                 
               </button>
            
             {isInKit ? (
               
                 <button
                 className=""
                 onClick={(e) => kitHandler(e)}
 
               >
              
              <div className="mx-5 mb-2 p-2 rounded-xl mt-2 bg-sky-700">
                 <span className="material-icons-outlined text-white ">
                   check
                 </span>
                 <span className="mb-2 ml-2 text-white font-medium text-m">In My Kit</span>
                 </div>
                
               </button>
             ) : (
               <button
                 className="mx-5 mb-2 p-2 rounded-xl mt-2 hover:bg-sky-700 hover:text-white"
                 onClick={(e) => {
                   e.preventDefault();
                   token ? kitHandler(e) : navigate("/login");
                 }}
               >
                <div className="">
                 <span className="material-icons-outlined  ">
                   add  
                 </span>
                 <span className="mb-2 text-m font-medium ml-2 ">Add My kit</span>
                 </div>
                
               </button>
             )}
             {isInWatchlist ? (
               <button
                 className=""
                 disabled={true}
                 style={{
                   cursor: "default",
                 }}
               >
                 <div className="mx-5 mb-2 p-2 rounded-xl mt-2 bg-sky-700">
                 <span className="material-icons-outlined text-white ">
                   bookmark
                 </span>
                 <span className="mb-2 ml-2 text-white font-medium text-m">In My Watchlist</span>
                 </div>
               
               </button>
             ) : (
               <button
                 className="mx-5 mb-2 p-2 rounded-xl mt-2 hover:bg-sky-700"
                 onClick={(e) => {
                   e.preventDefault();
                   token ? watchlistHandler(e) : navigate("/login");
                 }}
               >
                 <div className="">
                 <span className="material-icons-outlined md-light  ">
                   bookmark_border 
                 </span>
                 <span className="mb-2 text-l font-medium ml-2">Add Watchlist</span>
                 </div>
                 
               </button>
             )}
             <button
                 className="mx-5 mb-2 p-2 rounded-xl mt-2 hover:bg-sky-700 hover:text-white "
                 
               >
                 <div className="">
                 <span className="material-icons-outlined md-light  ">
                   verified_user
                 </span>
                 <span className="mb-2 text-l font-medium  ml-2">Add Certification</span>
                 </div>
                 
               </button>
           </div>
           )}
        </div>
        </button>
    </>
  );
}