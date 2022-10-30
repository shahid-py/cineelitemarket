
import { useState } from "react";
import axios from "axios";

import { useData } from "../context/DataContext";

import { API_URL } from "../utils";



export function KitCard({ product }) {
  const {
  
    dispatch
  } = useData();

  const { _id, Company, Model, Images } = product;


  const [edit, setEdit] = useState(false)
  const handleEdit = () => {
    setEdit(!edit);
  };
  
  
  const [deleteit, setDelete] = useState(false)
  const handleDelete = () => {
    setDelete(!deleteit);
  };
  

  const removeProductFromKit = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { success },
      } = await axios.delete(`${API_URL}/kit/${_id}`);

      if (success) {
        dispatch({ type: "REMOVE_FROM_KIT", payload: product });
      }
    } catch (error) {
      console.error(error);
    }
  };
  const [editing, setEditing] = useState(false);
  const onSave = val => {
    console.log('Edited Value -> ', val)
  }
 
  
  
  return (
    <>
  
  
      <div  
       className="bg-red-500  rounded-xl border border-1 border-cyan-100 w-56 h-80 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col  ">
      <button onClick={() => handleEdit(true)
      }>
    
        
          <img  src="" alt="equipment" className="object-fill bg-white rounded-xl mt-2  h-36  w-52 mx-auto my-auto "/>
      
        <div className="p-1 my-auto">
         <h5 className=" font-medium text-center text- mb-2 text-3xl dark:text-white">{Company}</h5>
            
         
         
            <h3 className="mb-2 text-center font-normal tracking-tight    dark:text-white">{Model}</h3>
          
        </div>
        </button>
         
       
        {edit && (
          <>
            <div className=" w-2/6 h-full absolute z-50 flex flex-col flex-grow  bg-white   border border-4 rounded-2xl mx-auto left-0 right-0 bottom-2 shadow-2xl  ">
              <div className="flex flex-col">
                <div className="my-auto">
                  <h5 className=" font-semibold  text-center mb-2 text-2xl ">
                    {}
                  </h5>

                  <h3 className="mb-2 text-center font-normal tracking-tight    dark:text-white">
                    {Model}
                  </h3>
                </div>
                <img
                  src="as"
                  alt="equipment"
                  className="object-fill px-12 bg-gray-100 mb-1 w-64 rounded-xl mx-auto my-auto "
                />
              </div>

              <button>
                <div className=" mb-2 flex  mx-24 rounded-xl border-2 border-black mt-2 hover:bg-yellow-300">
                  <span className="material-icons-outlined text-black ml-4 text-3xl ">
                    edit
                  </span>
                  <span className="mb-2  text-black font-medium text-base" >
                    Edit Details
                  </span>
                </div>
              </button>

              <button>
                <div className=" mb-2 flex  mx-24 rounded-xl border-2 border-blue-600 mt-2 hover:bg-yellow-300">
                  <span className="material-icons-outlined text-blue-600 ml-4 text-3xl ">
                    calendar_month
                  </span>
                  <span className="mb-2  text-blue-600 font-medium text-base">
                    View Schedule
                  </span>
                </div>
              </button>
              <button>
                <div className=" mb-2 p-1 flex mx-24 rounded-xl  mt-2 bg-gray-300 hover:bg-yellow-300">
                  <span className="material-icons-outlined text-white ml-4 text-3xl  ">
                    visibility
                  </span>
                  <span className="mb-2  text-gray-100 font-medium text-m">
                    {" "}
                    Show On Profile
                  </span>
                </div>
              </button>
              <button>
                <div className=" mb-2 p-1 flex mx-24 rounded-xl  mt-2 bg-gray-300 hover:bg-yellow-300">
                  <span className="material-icons-outlined text-white ml-4 text-3xl ">
                    <span class="material-symbols-outlined">request_quote</span>
                  </span>
                  <span className="mb-2  text-gray-100 font-medium text-m">
                    {" "}
                    Add to Job
                  </span>
                </div>
              </button>
              <button>
                <div className=" mb-2 p-1 flex mx-24 rounded-xl mt-2  bg-gray-300 hover:bg-yellow-300">
                  <span className="material-icons-outlined text-white ml-4 text-3xl ">
                    sell
                  </span>
                  <span className="mb-2  text-gray-100 font-medium text-m">
                    Sell Item
                  </span>
                </div>
              </button>
              <button>
                <div className=" mb-2 p-1  flex mx-24 rounded-xl bg-gray-300 mt-2 hover:bg-yellow-300">
                  <span className="material-icons-outlined ml-4 text-white text-3xl ">
                    logout
                  </span>
                  <span className="mb-2  text-gray-100 font-medium text-m">
                    Mark as Sold
                  </span>
                </div>

                <span
                  onClick={(e) => removeProductFromKit(e)}
                  className="material-icons-outlined flex-row  ml-4 text-gray-300 text-3xl "
                >
                  delete
                </span>
              </button>
            </div>
            <div
              onClick={() => handleEdit(false)}
              className=" fixed  w-full right-0 top-0 h-screen bg-black bg-opacity-50"
            ></div>
          </>
        )}
      </div>
    
   
  </>
 
  );
}