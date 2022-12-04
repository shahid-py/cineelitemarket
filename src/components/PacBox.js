import AddPackage from "./AddPackage";
import React from "react";
import "./PacBox.css";

const PacBox = ({ setShowMyModal, pac, packageName }) => {
  return (
    <div class="box-content h-4 w-90 p-3 border-1 mt-2 col-span-3 mx-5 bg-[#AAAAAA] rounded-t-2xl">
      <div className="inline-flex">
        <div id="vector"></div>&nbsp;&nbsp;
        <div className="-mt-1">{packageName}</div>
        <div className="" id="invoice"></div>
        <div id="invoiceText">Add to Job</div>
        <div id="Pencil" onClick={() => setShowMyModal(true)}></div>
      </div>

      <AddPackage pac={pac} />
    </div>
  );
};

export default PacBox;
