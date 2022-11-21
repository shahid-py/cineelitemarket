import React, { useState } from "react";

const PacDetails = ({ show, toClose,handlePname,packageName,setPackageName,createBox }) => {

 const [name1,setName1] = useState();


  const handelingClose = (e) => {
    if (e.target.id === "container") toClose();
  };

  const handleSubmit =(e) =>{
    handlePname(true);
    e.preventDefault();
    console.log(name1)
    packageName(name1)
    createBox();
  }


  

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    onClick={handelingClose}
    id='container'>
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <form onSubmit={handleSubmit}>
          <div class="form-group mb-6">
            <label
              for="inputname"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Package Name
            </label>
            <input
            onChange={e => setName1(e.target.value)}
            //  value={packageName}
              type="text"
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="inputname"
              placeholder="Enter Name"
            />
          </div>
          <button
            type="submit"
            class="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PacDetails;
