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
 
     
    <div className="wishlist-page">
    {watchlist.length ? (
      <>
        <div className="">
          {watchlist.map((product) => (
            <WatchlistCard product={product} key={product._id} />
          ))}
        </div>
      </>
    ) : (
      <div className="wishlist-empty">
        <h2> Watchlist is empty! </h2>
       
      </div>
    )}
  </div>
    
  );
  }