import { useState } from "react";

export function Header() {
    const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
    const [burger, setBurger] = useState(false);
  const handleBurger = () => {
    setBurger(!burger);
  };
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="w-full px-6 sm:px-8  mx-auto grid grid-flow-col py-3 sm:py-4">
     
  <button type="button" className="inline-flex items-center  ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
      onClick={() => handleBurger(true)
      }>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
    </button>
   { burger && (

<>
     <ul className=" duration-300 md:hidden fixed bg-white left-0 top-0 z-40  h-screen w-2/3 text-justify   flex-row   text-l font-medium   ">
        <li className="pb-4  pt-3 text-center block font-semibold border-b-4 text-2xl">
         CineElite
        </li>
        <li className="block p-4  text-center text-gray-700  hover:bg-gray-100 ">
          Dashboard 
        </li>
        <li className="p-4 block text-center text-gray-700 hover:bg-gray-100 ">
        Messages
        </li>
       
        
      </ul>
      <div   onClick={() => handleBurger(false)} className=" fixed md:hidden  w-1/3 right-0 top-0 h-screen bg-black bg-opacity-50" >
      </div>
      </>


   )}
 
      <span className="col-start-2 md:col-end-3 m text-xl font-semibold flex items-center">CineElite</span>
  

  <div className="hidden  w-full md:flex col-start-10 col-end-12  md:w-auto " >
    <ul className=" flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
     <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dashboard</a>
      </li>
      <span className="material-icons-outlined">
        chat
       </span>
    </ul>
  </div>
  <div className=" flex col-start-12 col-end-14 ">
      <button  className=" mr-3 text-sm  rounded-full md:mr-0 " 
      onClick={handleOpen}>
        <img className="w-12 h-12 rounded-full" src="https://www.pngmart.com/files/22/User-Avatar-Profile-Background-Isolated-PNG.png" alt="user photo"/>
      </button>
      {  open && (
      <div className=" absolute  mt-12 right-0 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="py-3 px-4">
          <span className="block text-sm text-gray-900 dark:text-white">Shahid Khan</span>
          <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">mo.shahidkhan1999@gmail.com</span>
        </div>
        <ul className="py-1" >
          <li>
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
      )}
      
     
  </div>
  </div>
</nav>

  );
}