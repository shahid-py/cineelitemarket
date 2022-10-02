
import { useState } from "react";
import { useParams} from "react-router";
import { useData } from "../context/DataContext";

export function ProductDetails() {

    const { productId } = useParams();
    const {
      state: { inventory },
      dispatch,
    } = useData();
    const product = inventory?.find((product) => product._id === productId);

    
  return (
    <>
    {product && ( 
<section className="  mx-16 text-gray-700 bg-gray-100 body-font border-0 rounded-2xl overflow-hidden bg-white">
  <div className="container px-5 py-15 mx-auto">
    <div className="lg:w-full mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-72 h-45 my-auto  bg-white bg-cover rounded border border-gray-20" src={product.image}/>
      <div className="lg:w-3/4 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-md title-font text-gray-500 tracking-widest">{product.typeOfBrand}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
       
        <p className="leading-relaxed text-2xl">{product.description}</p>
      
        <div className="flex mt-5">
          <span className="title-font font-medium text-2xl text-gray-900">Rs. {product.price}</span>
          <button className="flex ml-auto text-white text-3xl   bg-red-500 border-0 py-3 px-16 mr-12 focus:outline-none hover:bg-red-600 rounded-xl ">Buy</button>
          
        </div>
      </div>
    </div>
  </div>
</section>
    )}
    </>
  )
}