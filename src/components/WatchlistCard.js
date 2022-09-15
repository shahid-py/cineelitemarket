import { Link } from "react-router-dom";
import axios from "axios";
import { useData } from "../context/DataContext";
import { API_URL } from "../utils";


export function WatchlistCard({ product }) {
  const {
    state: { kit },
    dispatch,
  } = useData();

  

  const { _id, typeOfBrand,  name, image} = product;

  const isInKit = kit.find((kitItem) => kitItem._id === _id);

  

  const removeProductFromWatchlist = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { success },
      } = await axios.delete(`${API_URL}/watchlist/${_id}`);

      if (success) {
        dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: product });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
   
    <Link to={`/product/${_id}`} className="link">
      <div className="bg-white border border-1 border-cyan-100 w-56 h-80 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col  ">
        

        
          <img src={image} alt="equipment" className="object-fill h-32 mb-1 w-44 mx-6 my-auto "/>
      
        <div className="p-4 my-auto">
         <h5 className=" font-semibold text-center mb-2 text-2xl border-t-4 dark:text-white">{typeOfBrand}</h5>
            
         
         
            <h3 className="mb-2 text-center font-normal tracking-tight    dark:text-white">{name}</h3>
          
        </div>
          <div className=" my-auto text-center">
         
          
          {isInKit ? (
            <button
              className=""
              
            >
           
              <span className="material-icons-outlined">east</span>
            </button>
          ) : (
            <button
              className="mx-5"
              onClick={(e) => removeProductFromWatchlist(e)}
            >
              <span className="material-icons-outlined md-light">
                add
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