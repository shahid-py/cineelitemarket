import { Link } from "react-router-dom";
import { KitCard } from "../components/KitCard";
import {useData} from "../context/DataContext"


export function Kit() {
  const {
    state: {
      kit,
      inventory,
      sortBy,
      sortByTypeOfBrand,
      sortByTypeOfCategory
    },
    dispatch,
    isLoading,
  } = useData();
  const getSortedData = (productList, sortBy) => {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return productList.sort((a, b) => b["price"] - a["price"]);
    }

    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return productList.sort((a, b) => a["price"] - b["price"]);
    }

    return productList;
  };

  const getFilteredData = (
    productList,
   
  ) => {
    return productList
      
    .filter((kit) =>
    sortByTypeOfCategory.length
      ? sortByTypeOfCategory.includes(kit.category)
        ? kit
        : false
      : kit
  )
      .filter((kit )=>
        sortByTypeOfBrand.length
          ? sortByTypeOfBrand.includes(kit.typeOfBrand)
            ? kit
            : false
          : kit
      );
  };
  const sortedData = getSortedData(inventory, sortBy);
  const filteredData = getFilteredData(sortedData, {
   
   
  });
  if(isLoading) {
    return(
      <div className="spinner">
        <div></div>
        <div></div>
      </div>
    )
  }
    
     

  return (
 
     
    <div className="grid grid-cols-4 ">
      <div className=" w-full lg:flex flex-row xl:flex-col hidden   ">
       
        
        

        <div className=" ml-2 mb-6 w-64 h-96 fixed shadow p-5 bg-white rounded-lg">
        <button type="button" className="flex  w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">Category</span>
                  <span className="ml-6 flex items-center">
                   
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                   
                    
                  </span>
                </button>
                <div className="pt-6" id="filter-section-mobile-1">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <input  type="checkbox" onChange={() =>
                  dispatch({
                    type: "TOGGLE_CATEGORY",
                    payload: "cine",
                  })}  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label className="ml-3 min-w-0 flex-1 text-gray-500">Cine</label>
                  </div>

                  <div className="flex items-center">
                    <input  type="checkbox"
                     onChange={() =>
                      dispatch({
                        type: "TOGGLE_CATEGORY",
                        payload: "broadcast",
                      })}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label  className="ml-3 min-w-0 flex-1 text-gray-500">Broadcast</label>
                  </div>

                 

           
                </div>
              </div>
              <button type="button" className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">Brand</span>
                  <span className="ml-6 flex items-center">
                   
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                   
                    
                  </span>
                </button>
                <div className="pt-6" id="filter-section-mobile-1">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <input  type="checkbox" onChange={() =>
                  dispatch({
                    type: "TOGGLE_BRAND",
                    payload: "Canon",
                  })}  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label className="ml-3 min-w-0 flex-1 text-gray-500">Canon</label>
                  </div>

                  <div className="flex items-center">
                    <input  type="checkbox" 
                    onChange={() =>
                      dispatch({
                        type: "TOGGLE_BRAND",
                        payload: "Panasonic",
                      })}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label  className="ml-3 min-w-0 flex-1 text-gray-500">Panasonic</label>
                  </div>

                 
                  <div className="flex items-center">
                    <input 
                    onChange={() =>
                      dispatch({
                        type: "TOGGLE_BRAND",
                        payload: "DJI",
                      })}
                    type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label  className="ml-3 min-w-0 flex-1 text-gray-500">DJI</label>
                  </div>

           
                </div>
              </div>
            
        </div>

        
        
      </div>
      {kit.length ? (
      <>
        <div className="w-full grid grid-cols-1 lg:col-span-3 xl:col-span-3 col-span-4  sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center py-3 px-7 mt-8  ">
          {kit.map((kit) => (
            <KitCard product={kit} key={kit._id} />
          ))}
        </div>
      </>
    ) : (
      <div className="flex flex-col mx-auto  my-auto items-center pb-10">
    
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Your Watchlist is Currently Empty !</h5>
        <span className="text-m text-gray-500 dark:text-gray-400 py-4">Looks like you haven't added anything to your watchlist yet</span>
       
            <Link to ="/explore" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Explore Item</Link>
          
        
    </div>
    )}
    </div>
  );
  }