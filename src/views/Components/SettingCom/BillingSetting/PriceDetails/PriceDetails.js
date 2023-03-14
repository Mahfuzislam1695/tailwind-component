import React from "react";
import PriceCard from "./PriceCard";

const PriceDetails = () => {
  return (
    <div>
      <div className="flex justify-between mb-2 ">
        <p>Monthly Pricing Pans</p>
        <div>2</div>
      </div>

      <div className="grid grid-cols-3 w-full py-8 px-8 bg-white rounded-xl shadow-lg gap-4">
        <div className="col-span-1">
          <PriceCard name="Start Up" />
        </div>
        <div className="col-span-1">
          <PriceCard name="Professional" />
        </div>
        <div className="col-span-1">
          <PriceCard name="Growth" />
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
