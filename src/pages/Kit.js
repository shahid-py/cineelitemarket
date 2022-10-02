import { Link } from "react-router-dom";
import { KitCard } from "../components/KitCard";
import {useData} from "../context/DataContext"


export function Kit() {
    const {
        state: { kit }, isLoading
      } = useData();
    
      if(isLoading) {
        return(
          <div className="spinner">
            <div></div>
            <div></div>
          </div>
        )
      }

  return (
 
     
    <div>
    {kit.length ? (
      <>
        <div className="grid grid-cols-1 lg:col-span-3 xl:col-span-3 col-span-4  sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center py-3 px-7 mt-8  ">
          {kit.map((product) => (
            <KitCard product={product} key={product._id} />
          ))}
        </div>
      </>
    ) : (
      <div class="flex flex-col mx-auto  my-auto items-center pb-10">
    <svg className="w-56" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M5 2H3v3H0v2h3v3h2V7h3V5H5V2zm12 1h-7v2h5v2h5v12H5v-7H3v9h19V5h-5V3zm-7 6h4v2h2v4h-2v2h-4v-2h4v-4h-4V9zm-2 2h2v4H8v-4z" fill="#57acb2"></path> </svg>
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Your Kit is Currently Empty !</h5>
      <span class="text-m text-gray-500 dark:text-gray-400 py-4">Looks like you haven't added anything to your kit yet</span>
     
          <Link to ="/" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Explore Item</Link>
        
      
  </div>
    )}
  </div>
    
  );
  }