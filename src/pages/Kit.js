import { Link } from "react-router-dom";
import { KitCard } from "../components/KitCard";
import {useData} from "../context/DataContext"
import { useState,useEffect } from "react";
import {API_URL} from "../utils/index"
import axios from "axios";


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
  const [kitData, setKitData] = useState([]);
  const [category, setCategory] = useState(false)
  const handleCategory = () => {
    setCategory(!category);
  };
  
  const [brand, setBrand] = useState(false)
  const handleBrand = () => {
    setBrand(!brand);
  };
  const getKitData = async() =>{
    const userKitData =  await axios.get(`${API_URL}/kit`);
    console.log(userKitData);
    if(userKitData){
     setKitData(userKitData.data.products);
    }    
   }
   useEffect(()=>{
     getKitData()
   },[]);
   console.log(kitData);
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
 
     
    <div className="w-full grid grid-cols-4 ">
      <div className=" w-full flex-col lg:flex hidden   ">
       
        
        
      <form class="flex items-center">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-64 ml-2 mt-4">
        <div class="flex absolute inset-y-0 right-2 items-center  pointer-events-none  rounded-xl">
            <svg aria-hidden="true" class="w-7 h-6 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-8 p-2.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Smart Search" required/>
    </div>
    </form>
        <div className=" ml-2 mb-3 w-64 h-fit z-10 shadow p-5  bg-white rounded-lg">
        
    <div className="bg-gray-300 rounded-xl p-2 mb-6 flex gap-2">
      
        <span class="material-icons-outlined ml-14 text-xl text-white">
tune
</span>
      <p className="text-white text-lg font-medium">Filter</p>
    </div>
    
    
        <button type="button" onClick={() => handleCategory(true)
      } className="flex  w-full p-1 mt-2 bg-yellow-400 rounded-2xl  items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                  <span className="font-medium mx-16 text-gray-900">Category</span>
                  </button>
                  {category  && (
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
)}
                <button type="button" onClick={() => handleBrand(true)
      } className="flex  w-full p-1 mt-2 bg-yellow-400 rounded-2xl  items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                  <span className="font-medium mx-16 text-gray-900">Brand</span>
                  </button>
                  {brand && (
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
              )}
            
        </div>
        <div className="  -bottom-20 absolute ml-2 mb-6 w-64 h-fit rounded-xl shadow p-5 bg-white rounded-lg">
        <div className="bg-gray-300 rounded-xl p-2 flex gap-2 mb-3">
      
   
    <p className="text-white  text-lg ml-10  font-medium">Item Status</p>
    <span class="material-icons-outlined  text-xl text-white">
info
</span>
  </div>
  <div className="flex">
          <ul className=" list-outside text-base font-medium  ">
           
            <li className=" mb-3 ml-9">Incomplete</li>
            <li className=" mb-3 ml-9">Available</li>
            <li className=" mb-3 ml-9">Scheduled</li>
            <li className=" mb-3 ml-9">In use</li>
            <li className=" mb-3 ml-9">Unavailable</li>
            <li className=" mb-5 ml-9">Inactive</li>
            <li className=" ml-9 mb-3">Selling</li>
            <li className=" ml-9 ">Sold</li>
           
 
          </ul>
          <ul className=" list-outside text-base font-medium  ">
           
            <li className="mb-3"><span class=" left-2 relative rounded-full bg-red-500 text-white px-1.5 text-centre">{kit.length}
       </span></li>
            <li className="mb-3"><span class=" left-2 relative rounded-full bg-green-500 text-white px-1.5 text-centre">0
       </span></li>
            <li className="mb-3"> <span class=" left-2 relative rounded-full bg-blue-700 text-white px-1.5 text-centre">0
       </span></li>
            <li className="mb-3"> <span class=" left-2 relative rounded-full bg-indigo-500 text-white px-1.5 text-centre">0
       </span></li>
            <li className="mb-3"><span class=" left-2 relative rounded-full bg-yellow-500 text-white px-1.5 text-centre">0
       </span></li>
            <li className="mb-5"><span class=" left-2 relative rounded-full bg-pink-900 text-white px-1.5 text-centre">0
       </span></li>
            <li className="mb-3"><span class=" left-2 relative rounded-full bg-gray-300 text-red-500 px-1.5 text-centre">0
       </span></li>
            <li className="mb-3"><span class=" left-2 relative rounded-full bg-gray-300 text-gray-500 px-1.5 text-centre">0
       </span></li>
           
 
          </ul>
          </div>
        </div>

        
        
      </div>
       {kitData.length ? (
      <>
        <div className="w-full grid grid-cols-1 lg:col-span-3 xl:col-span-3 col-span-4  sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center py-3 px-7 mt-8   ">
          {kitData.map((kit) => (
            <KitCard product={kit} key={kit._id} />
          ))}
        </div>
      </>
    ) : (
      <div className="flex flex-col mx-auto  my-auto items-center pb-10">
    
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Your kit is Currently Empty !</h5>
        <span className="text-m text-gray-500 dark:text-gray-400 py-4">Looks like you haven't added anything to your watchlist yet</span>
       
            <Link to ="/explore" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Explore Item</Link>
          
        
    </div>
    )} 
    </div>
  );
  }