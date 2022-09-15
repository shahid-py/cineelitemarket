import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useData } from "../context/DataContext";
import { API_URL } from "../utils/index";

import { Toast } from "./Toast";

export function ProductCard({ product }) {
  const {
    state: { cart, watchlist },
    dispatch,
  } = useData();
  const { token } = useAuth();

  const navigate = useNavigate();
  const [toast, setToast] = useState(false);
  const [bagType, setBagType] = useState("");

  const { _id, typeOfBrand,  name, image } = product;

  const isInCart = cart?.find((cartItem) => cartItem._id === _id);
  const isInWatchlist = watchlist?.find(
    (watchlistItem) => watchlistItem._id === _id
  );

  const cartHandler = async (e) => {
    
    if (!isInCart) {
      try {
        const {
          data: { success },
        } = await axios.post(`${API_URL}/cart`, {
          product: {
            _id,
            quantity: 1,
          },
        });

        if (success) {
          dispatch({ type: "ADD_TO_CART", payload: product });
          setToast(true);
          setBagType("cart");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      navigate("/cart");
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
    }
  };

  return (
    <>
      {toast && <Toast toast={toast} setToast={setToast} bagType={bagType} />}
      <Link to={`/product/${_id}`} className="link">
        <div className="bg-white border border-1 border-cyan-100 w-56 h-80 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col  ">
          

          
            <img src={image} alt="equipment" className="object-fill h-32 mb-1 w-44 mx-6 my-auto "/>
        
          <div className="p-4 my-auto">
           <h5 className=" font-semibold text-center mb-2 text-2xl border-t-4 dark:text-white">{typeOfBrand}</h5>
              
           
           
              <h3 className="mb-2 text-center font-normal tracking-tight    dark:text-white">{name}</h3>
            
          </div>
            <div className=" my-auto text-center">
           
            
            {isInCart ? (
              <button
                className=""
                
              >
             
                <span className="material-icons-outlined">east</span>
              </button>
            ) : (
              <button
                className="mx-5"
                onClick={(e) => cartHandler(e)}
              >
                <span className="material-icons-outlined ">
                  add
                </span>
               
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
                <span className="material-icons-outlined  ">
                  bookmark
                </span>
              
              </button>
            ) : (
              <button
                className="mx-5"
                onClick={(e) => {
                  e.preventDefault();
                  token ? watchlistHandler(e) : navigate("/signup");
                }}
              >
                <span className="material-icons-outlined md-light">
                bookmark_border
                </span>
                
              </button>
            )}
            <button
                className="mx-5"
                
              >
                <span className="material-icons-outlined md-light ">
                 verified_user
                </span>
                
              </button>
          </div>
        </div>
      </Link>
    </>
  );
}