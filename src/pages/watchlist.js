import { Link } from "react-router-dom";
import { WatchlistCard } from "../components/WatchlistCard";
import {useData} from "../context/DataContext"


export function Watchlist() {
    const {
        state: { watchlist }, isLoading
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
    {watchlist.length ? (
      <>
        <div className="grid grid-cols-1 lg:col-span-3 xl:col-span-3 col-span-4  sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center py-3 px-7 mt-8  ">
          {watchlist.map((product) => (
            <WatchlistCard product={product} key={product._id} />
          ))}
        </div>
      </>
    ) : (
      <div className="flex flex-col mx-auto  my-auto items-center pb-10">
    
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Your Watchlist is Currently Empty !</h5>
        <span className="text-m text-gray-500 dark:text-gray-400 py-4">Looks like you haven't added anything to your watchlist yet</span>
       
            <Link to ="/" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Explore Item</Link>
          
        
    </div>
    )}
  </div>
    
  );
  }