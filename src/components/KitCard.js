import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import EdiText from "react-editext";
import { useData } from "../context/DataContext";
import Upload from "./uploadimage";
import { API_URL } from "../utils";



export function KitCard({ product }) {
  const {
  
    dispatch
  } = useData();


  const { _id, typeOfBrand,  name, image} = product;


  const [edit, setEdit] = useState(false)
  const handleEdit = () => {
    setEdit(!edit);
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
       className="bg-white  border border-1 border-cyan-100 w-56 h-80 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col  ">
      <button onClick={() => handleEdit(true)
      }>
    
        
          <img  src={image} alt="equipment" className="object-fill h-32 mb-1 w-44 mx-6 my-auto "/>
      
        <div className="p-4 my-auto">
         <h5 className=" font-semibold text-center mb-2 text-2xl border-t-4 dark:text-white">{typeOfBrand}</h5>
            
         
         
            <h3 className="mb-2 text-center font-normal tracking-tight    dark:text-white">{name}</h3>
          
        </div>
        </button>
          <div className=" my-auto text-center">
         
          
          
            <button
              className="mx-5 p-2"
              onClick={(e) => removeProductFromKit(e)}
            >
              <span className="text-xl  font-medium text-red-500">
                Remove from Kit
              </span>
             
            </button>
          
      
     
        </div>
       
        {
          edit &&(
            <>

            <div className=" w-2/5  absolute z-50 flex flex-col flex-grow  bg-white   border border-4 rounded-2xl mx-auto left-0 right-0 shadow-2xl ">
            <button
   className="text-2xl font-medium mb-6 mx-auto"
        onClick={() => {
          setEditing((e) => !e);
        }}
      >
        Edit Kit Item
      </button>
              <div  className="flex flex-row">
            <img src={image} alt="equipment" className="object-fill h-32 mb-1 w-44  my-auto "/>
      
            <div className="p-4 my-auto">
             <h5 className=" font-semibold  text-center  text-2xl ">{typeOfBrand}</h5>
                
             
             
                <h3 className="mb-2 text-center font-normal tracking-tight    dark:text-white">{name}</h3>
              </div>
              </div>
 
            
              
              <ul className="  flex flex-col pl-6 text-xl font-light  text-left    mb-6 mt-2">
       
              <li className="mb-2 mr-6">Profile</li>
              <li className="pb-2 flex flex-row m">Serial no : <EdiText
        type="text"
        className="list-inside ml-2 "
        editButtonClassName="custom-edit-button"
       value=""
       editing={editing}
        onSave={onSave}
      /> 
       </li>
              <li className="pb-2 flex flex-row m">Build Year :
              <EdiText
              type="text"
        className="list-inside ml-2 "
        editButtonClassName="custom-edit-button"
       value=""
       editing={editing}
        onSave={onSave}
        />
       </li>
              <li className="pb-2 flex flex-row m">Description
              <EdiText
              type="text"
        className="pb-2 flex flex-row m"
        editButtonClassName="custom-edit-button"
       value=""
       editing={editing}
        onSave={onSave}
        /></li>
              <li className="pb-2 flex flex-row m">Image
              <Upload></Upload></li>
              <li className="pb-2 flex flex-row m">Cost Price
              <EdiText
              type="text"
        className="list-inside ml-2 "
        editButtonClassName="custom-edit-button"
       value=""
       editing={editing}
        onSave={onSave}
        /></li>
              <li className="pb-2 flex flex-row m">Per day Rate
              <EdiText
              type="text"
        className="list-inside ml-2 "
        editButtonClassName="custom-edit-button"
       value=""
       editing={editing}
        onSave={onSave}
        /></li>
            </ul>
           </div>
           <div   onClick={() => handleEdit(false)} className=" fixed  w-full right-0 top-0 h-screen bg-black bg-opacity-50" >
   
           </div>
           </>
          )
        }
      </div>
    
   
  </>
 
  );
}