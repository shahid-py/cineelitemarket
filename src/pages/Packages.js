import PModal from "../components/PModal";
import { useState } from "react";
import PacBox from "../components/PacBox";
import PacDetails from "../components/PacDetails";

export function Packages() {
  const [showMyModal, setShowMyModal] = useState(false);
  const [showPacDetails,setShowPacDetails] = useState(false)
  const handleOnClose = () => setShowMyModal(false);
  const [pac, setPac] = useState([]);
  const [pdiv, setPdiv] = useState([]);
  const handelingClose = () => setShowPacDetails(false);
  const [pname, setPname] = useState(false);
  const [packageName,setPackageName] =useState([])
  var index = 0;
  const createBox = () => {
    setPdiv((present) => [...present, pdiv]);
    index++;
  };

  const handlePname = () => {
    setPname(!pname);
  };

  const PackagesName=(e)=>{
   setPackageName([...packageName,e])
  }
console.log(packageName)
  return (
    <div>
      <div className="grid grid-cols-4 ">
        <div className=" lg:flex flex-row xl:flex-col hidden ">
          <div className=" ml-2 mb-6 w-64 h-96 fixed shadow p-5 bg-white rounded-lg">
            <div className="text-center py-3">
              <button
                onClick={()=>{setShowPacDetails(true)}}
                type="button"
                className="bg-[#FFD907] text-white px-3 py-2 rounded hover:scale-95 transition text-xl font-normal"
              >
                Create New Packages
              </button>
              <div className="w-70 h-60 border rounded-2xl border bg-white mt-2">
                <div className="w-70 h-14 rounded-t-2xl bg-[#072448] text-white font-normal flex justify-center items-center text-xl">
                  Packages
                </div>
                <div>
                  {pname && (
                    <ul className="flex flex-col bg-gray-100 pb-2 rounded-lg shadow-xl px-6">
                      <li>Package Name: {packageName}</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <PacDetails toClose={handelingClose} show={showPacDetails} handlePname={handlePname} packageName={PackagesName} setPackageName={setPackageName} createBox={createBox}/>
        {pdiv.map((index) => (
          <PacBox setShowMyModal={setShowMyModal} pac={pac} packageName={packageName} />
        ))}
      </div>
      <PModal pItem={setPac} onClose={handleOnClose} visible={showMyModal} />
      {/* {pac.length!==0 && <div></div>} */}
    </div>
  );
}
