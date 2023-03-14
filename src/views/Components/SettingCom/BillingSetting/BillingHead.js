import React from "react";

const BillingHead = () => {
  return (
    <div className="w-full py-8 px-8 bg-white rounded-xl shadow-lg">
      <div className="flex justify-between">
        {/* <div className="grid grid-cols-4 gap-2"> */}
        <div className="">
          <p className="mb-1">Active since</p>
          <p className="">MAY 05,2022</p>
        </div>
        <div className="">
          <p className="mb-1">Account Status</p>
          <p className="">Active</p>
        </div>
        <div className="">
          <p className="mb-1">Active Package</p>
          <p className="uppercase">startup Annual</p>
        </div>
        <div className="flex items-end">
          <button className="">choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default BillingHead;
