
import { KitCard } from "../components/KitCard";
import {useData} from "../context/DataContext"
import { useState,useEffect } from "react";
import {API_URL} from "../utils/index"

import axios from "axios";


export function Kit() {
  const {
    state: {
      
      inventory,
      sortBy,
      sortByTypeOfBrand,
      sortByTypeOfCategory
    },
    dispatch,
    isLoading,
  } = useData();

  
  const [incomplete, setIncomplete] = useState([]);
  const [available, setAvailable] = useState([]);
  const [selling, setSelling] = useState([]);
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
     return userKitData.data.products;
    }    
   }
   const getFiltData = async()=>{
    const currentKitData = await getKitData();
    const currentData = currentKitData.filter(e=>e.Status=="Incomplete");
    setIncomplete(currentData);
    const currentAvailableData = currentKitData.filter(e=>e.Status=="Available");
    setAvailable(currentAvailableData);
    const currentSellingData = currentKitData.filter(e=>e.SellStatus=="Selling");
    setSelling(currentSellingData);
    
    }
   
   useEffect(()=>{
     getFiltData()
   },[]);
   
  
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
 
     
    <div className=" grid grid-cols-4  w-full bg-gray-200">
      <div className="  w-full flex-col ml-8 mt-12 lg:flex hidden     ">
       
        
        
      <form class="flex items-center">   
     <label for="simple-search" class="sr-only">Search</label>
     <div class="relative w-64 ml-2 r  ">
         <div class="flex absolute inset-y-2 right-2 items-center  pointer-events-none  ">
             <svg aria-hidden="true" class="w-10 h-9 font-light text-gray-300 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
         </div>
         <input type="text" id="simple-search" class="bg-gray-50 border border-gray-800 text-gray-900 text-sm rounded-full border-1  focus:ring-blue-500 focus:border-blue-500 block w-full pl-8 p-2.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Smart Search" required/>
     </div>
     </form>
         <div className=" ml-2 mb-3 w-64 h-fit shadow p-5 border-x border-b border-t-0  border-gray-800  bg-white rounded-t-2xl rounded-lg">
         
     <div className="bgcolor relative w-64 -top-5 rounded-t-xl py-4 -left-5 mb-2 flex gap-2">
       
         <span class="material-icons-outlined ml-24 text-xl text-white">
 tune
 </span>
       <p className="text-white text-lg font-medium">Filter</p>
     </div>
     
     
         <button type="button" onClick={() => handleCategory(true)
       } className="flex  w-fit p-1  bg-gray-200 rounded-lg mb-2 w-40 mx-auto items-center justify-between bg-white  py-2 text-gray-400 hover:text-gray-500">
                   <span className="font-medium mx-auto text-gray-900">Category</span>
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
       } className="flex  w-fit p-1 mt-2 bg-gray-200 rounded-lg  mx-auto w-40 items-center justify-between bg-white  py-2 text-gray-400 hover:text-gray-500">
                   <span className="font-medium  mx-auto text-gray-900">Brand</span>
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
        <div className="   ml-2 mb-6 w-64 h-fit rounded-xl shadow p-5 border-x border-b border-t-0  border-gray-800  bg-white rounded-t-2xl rounded-lg">
      
        <div className="bgcolor relative w-64 -top-5 rounded-t-xl py-4 -left-5 mb-2 flex gap-2">

      
   
    <p className="text-white  text-lg ml-16 font-medium">Item Status</p>
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
           
            <li className="mb-3"><span class=" left-2 relative rounded-full bg-red-500 text-white px-1.5 text-centre">{incomplete.length}
       </span></li>
            <li className="mb-3"><span class=" left-2 relative rounded-full bg-green-500 text-white px-1.5 text-centre">{available.length}
       </span></li>
            <li className="mb-3"> <span class=" left-2 relative rounded-full bg-blue-700 text-white px-1.5 text-centre">0
       </span></li>
            <li className="mb-3"> <span class=" left-2 relative rounded-full bg-indigo-500 text-white px-1.5 text-centre">0
       </span></li>
            <li className="mb-3"><span class=" left-2 relative rounded-full bg-yellow-500 text-white px-1.5 text-centre">0
       </span></li>
            <li className="mb-5"><span class=" left-2 relative rounded-full bg-pink-900 text-white px-1.5 text-centre">0
       </span></li>
            <li className="mb-3"><span class=" left-2 relative rounded-full bg-gray-300 text-red-500 px-1.5 text-centre">{selling.length}
       </span></li>
            <li className="mb-3"><span class=" left-2 relative rounded-full bg-gray-300 text-gray-500 px-1.5 text-centre">0
       </span></li>
           
 
          </ul>
          </div>
        </div>

        
        
      </div>
      <div className="text-2xl font-medium   border-b-2 border-gray-400 pr-16 absolute top-28 left-96 py-2 xl:top-64   ">Incomplete</div>
      
     
      <div className="grid  lg:col-span-3 xl:col-span-3 col-span-4  sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 grow  place-items-center gap-6   mt-24  ">

       {incomplete.length ? (
      <>
   

          {incomplete.map((kit) => (
            <KitCard product={kit} key={kit._id} />
          ))}
        
      </>
    ) : (
      <></>
    )} 
  </div>
  
  <div className="text-2xl font-medium    pr-16 relative  left-96  underline underline-offset-8 decoration-gray-400  ">Available</div>
  <div className="grid-rows-auto grid  lg:col-span-3 xl:col-span-3 col-span-4  sm:grid-cols-2 place-items-center  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-6   mt-16 mb-16   ">

  {available.length ? (
      <>
   

          {available.map((kit) => (
            <KitCard product={kit} key={kit._id} />
          ))}
        
      </>
    ) : (
     <></>
    )}
       </div>

       
    </div>
    
  );
  }