import { ProductCard } from "../components/ProductCard";
import { useData } from "../context/DataContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CompareCard } from "../components/CompareCard";

export function Products() {
  const {
    state: {
      inventory,
      sortBy,
      sortByTypeOfBrand,
      sortByTypeOfCategory,
      compare
    },
    dispatch,
    isLoading,
  } = useData();
  const [category, setCategory] = useState(false)
  const handleCategory = () => {
    setCategory(!category);
  };
  const [brand, setBrand] = useState(false)
  const handleBrand = () => {
    setBrand(!brand);
  };
  const [suggest, setSuggest] = useState(false)
  const handleSuggest = () => {
    setSuggest(!suggest);
  };
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
      
    .filter((product) =>
    sortByTypeOfCategory.length
      ? sortByTypeOfCategory.includes(product.category)
        ? product
        : false
      : product
  )
      .filter((product) =>
        sortByTypeOfBrand.length
          ? sortByTypeOfBrand.includes(product.typeOfBrand)
            ? product
            : false
          : product
      );
  };

  const sortedData = getSortedData(inventory, sortBy);
  const filteredData = getFilteredData(sortedData, {
   
   
  });

  return (
    <div className="grid grid-cols-4 ">
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
         <div className="   border-2  ml-2  w-fit h-fit rounded-xl mb-6 shadow p-5 bg-white rounded-lg">
         <div className="bg-gray-300 rounded-xl p-2 flex mb-6 gap-2">
         <span class="material-icons-outlined ml-10 text-xl text-white">
 compare
 </span>
 
     <p className="text-white  text-lg  font-medium">Comparison</p>
     </div>
      <>
        <div className=" grid grid-rows-1 gap-6 place-items-center mb-6   ">
          {compare.map((compare) => (
            <CompareCard product={compare} key={compare._id} />
          ))}
        </div>
      </>
   
      
    
  <Link to ="/compare">
   <button type="button"  className="flex  w-full p-1 mt-2 bg-yellow-400 rounded-2xl  items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                   <span className="font-medium mx-16 text-gray-900">Compare</span>
                   </button>
                   </Link>

         </div>
 <div className="">
         <button onClick={() => handleSuggest(true)}type="button"  className="flex  w-64 p-2 ml-2 mt-2  bg-yellow-400 rounded-2xl  items-center justify-between bg-white  text-gray-400 hover:text-gray-500">
                   <span className="font-medium ml-12 text-gray-900">Suggest Missing Item</span>
                   </button>
                   </div>
                   {suggest && (
                   <div onClick={() => handleSuggest(false)}className="  -bottom-12 absolute ml-2 mb-6 w-fit h-fit rounded-xl shadow p-5 bg-white rounded-lg">

      
   
    <p className="text-black  text-lg mx-10  mb-6 font-medium">Suggest Missing Equipment</p>
   
  
  <div className="flex ">
          <ul className=" list-outside text-base font-medium ml-2 ">
           
            <li className=" mb-3 ml-9">Product Brand</li>
            <li className=" mb-3 ml-9">Description</li>
            <li className=" mb-3 ml-9">Website Link</li>
         
           
 
          </ul>
          <form className=" list-outside text-base font-medium  mb-4">
           
          <input type="text" id="simple-search" class=" ml-4 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-8 p-2.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          <input type="text" id="simple-search" class=" ml-4 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-8 p-2.5 mb-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
       

       
           
 
          </form>
          

          </div>
          <button type="button"  className="flex   w-36 p-2 mx-16 mt-2  bg-yellow-400 rounded-2xl  items-center justify-between bg-white  text-gray-400 hover:text-gray-500">
                   <span className="font-medium  ml-12 text-gray-900">Send</span>
                   </button>
        </div>
        )}
         
       </div>
      <div className="grid grid-rows-1 lg:col-span-3 xl:col-span-3 col-span-4  sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center py-3 px-7 mt-8  " >
        {isLoading ? (
          <div className="spinner">
            <div></div>
            <div></div>
          </div>
        ) : (
          <>
            {filteredData.map((product) => (
              <ProductCard
                product={product}
                key={product._id}
                
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}