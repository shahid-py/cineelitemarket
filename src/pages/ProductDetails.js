import { useState } from "react";
import { VectorMap } from "react-jvectormap";
import { useParams } from "react-router";
import { useData } from "../context/DataContext";
import Maps from "../components/Maps";
import PlacesAutocomplete from "react-places-autocomplete";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
import Coordinates from "../components/Coordinates";

export function ProductDetails() {
  const { productId } = useParams();
  const {
    state: { inventory },
    dispatch,
  } = useData();
  const product = inventory?.find((product) => product._id === productId);

  const handleClick = (e, countryCode) => {
    console.log(countryCode);
  };

  const [sale, setSale] = useState(false);
  const handleSale = () => {
    setSale(!sale);
  };
  const mapData = {
    CN: 100000,
    IN: 9900,
    SA: 86,
    EG: 70,
    SE: 0,
    FI: 0,
    FR: 0,
    US: 20,
  };

  // const [address,setAddress]= useState()
  // const [coordinates,setCoordinates]= useState({lat:28.704060,lng:77.102493})
  // const handelSelect = async value =>{
  //   const results = await geocodeByAddress(value)
  //   const ll = await getLatLng(results[0])
  //   console.log(ll);
  //   setAddress(value)
  //   setCoordinates(ll)
  // }

  return (
    <>
      {product && (
        <>
          <div className="  mt-6 text-gray-700 bg-gray-100 border border-2 body-font mx-16 border-0 rounded-2xl overflow-hidden ">
            <div className="container px-5 py-15 mx-auto">
              <div className="lg:w-full mx-auto flex flex-wrap">
                <img
                  alt="ecommerce"
                  className="lg:w-72 h-45 my-auto  bg-white bg-cover rounded border border-gray-20"
                  src={product.image}
                />
                <div className="lg:w-3/4 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-md title-font text-gray-500 tracking-widest">
                    {product.typeOfBrand}
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {product.name}
                  </h1>

                  <p className="leading-relaxed text-2xl">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white">
            <div class=" mx-12 grid  grid-cols-1  items-center border border-2 rounded-2xl mt-12  py-24 px-4 sm:px-6 sm:py-32  lg:grid-cols-2 lg:px-8">
              <div>
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Technical Specifications
                </h2>

                <dl class="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  {product.details.map(({ title, text }) => (
                    <div class="border-t border-gray-200 pt-4">
                      <dt key={title} class="font-medium text-gray-900">
                        {title}
                      </dt>
                      <dd class="mt-2 text-sm text-gray-500">{text}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div class="items-center    sm:px-6  ">
                <div>
                  <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Key Features
                  </h2>

                  {product.points.map(({ text }) => (
                    <dl class="mt-12 grid grid-cols-1  sm:grid-cols-2 ">
                      <div class="border-t border-gray-200 pt-1">
                        <dt class="font-medium text-gray-900">{text}</dt>
                      </div>
                    </dl>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 mx-12 grid grid-cols-3 bg-white border mb-12 border-2 body-font  rounded-2xl overflow-hidden ">
            <div className="  px-5 px-16 pb-6 w-1/3 p-5 bg-white ">
              <div className="pt-6" id="filter-section-mobile-1">
                <h2 class="text-xl font-bold tracking-tight text-gray-900 sm:text-xl mb-6">
                  show Availablity
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label className="ml-3 min-w-0 flex-1 text-gray-500">
                      For Hire
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      onChange={() => {
                        handleSale(true);
                      }}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label className="ml-3 min-w-0 flex-1 text-gray-500">
                      For Sale
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label className="ml-3 min-w-0 flex-1 text-gray-500">
                      Certified Personal
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="  px-5 px-16 pb-6 w-1/3 p-5 bg-white mr-10">
              <div className="pt-6" id="filter-section-mobile-1">
                <h2 class="text-xl font-bold tracking-tight text-gray-900 sm:text-xl mb-6">
                  Filter By Geography
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="h-4 w-13 p-2 border border-gray-300  focus:ring-indigo-500"
                      placeholder="Country"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="h-4 w-13 p-2 border border-gray-300  focus:ring-indigo-500"
                      placeholder="State"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="number"
                      className="h-4 w-13 p-2 border border-gray-300  focus:ring-indigo-500"
                      placeholder="Pincode"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className=""
              style={{
                width: 500,
                height: 270,
                position: "absolute",
                left: 700,
                top: 1900,
              }}
            >
               <Maps/>
              {/* <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handelSelect}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,  
                  loading,
                }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: "Search Places ...",
                        className: "location-search-input",
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map((suggestion) => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: "#fafafa", cursor: "pointer" }
                          : { backgroundColor: "#ffffff", cursor: "pointer" };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete> */}
              {/* <VectorMap
                map={"world_mill"}
                backgroundColor="transparent" //change it to ocean blue: #0077be
                zoomOnScroll={false}
                containerStyle={{
                  width: "100%",
                  height: "100%",
                }}
                onRegionClick={handleClick} //gets the country code
                containerClassName="map"
                regionStyle={{
                  initial: {
                    fill: "#e4e4e4",
                    "fill-opacity": 0.9,
                    stroke: "none",
                    "stroke-width": 0,
                    "stroke-opacity": 0,
                  },
                  hover: {
                    "fill-opacity": 0.8,
                    cursor: "pointer",
                  },
                  selected: {
                    fill: "#2938bc", //color for the clicked country
                  },
                  selectedHover: {},
                }}
                regionsSelectable={true}
              
              /> */}
            </div>
          </div>
          <div className=" grid grid-cols-2  ">
            <div className="mt-6 mx-12 bg-white border mb-12 border-2 body-font  rounded-2xl overflow-hidden ">
              <div className="    pb-6 pl-6 bg-white ">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 mx-auto text-center sm:text-xl mb-6">
                  Available
                </h2>
                <div>
                  {sale && (
                    <ul className="flex flex-col bg-gray-100 pb-2 rounded-lg shadow-xl px-6">
                      <li className="">{product.name}</li>
                      <li>Seller :</li>
                      <li>Location :</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div
              className="mt-6 mx-10 grid grid-cols-2 bg-white border mb-12 border-2 body-font  rounded-2xl overflow-hidden "
              style={{ width: 500, height: 300 }}
            >
              <div className="  px-5  pb-6 w-1/2  bg-white ">
                <div className="pt-6" id="filter-section-mobile-1">
                  <h2 class="text-3xl font-bold tracking-tight text-gray-900  text-center sm:text-xl mb-6">
                    Manufacturer Info
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

// function Maps(){
//   return <GoogleMap
//   zoom={10}
//   center={{lat:44,lng:-80}}
//   style={{width:"100%",height:"100%"}}>

//   </GoogleMap>
// }
