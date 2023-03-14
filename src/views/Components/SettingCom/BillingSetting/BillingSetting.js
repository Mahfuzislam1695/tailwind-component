import React from "react";
import BillingDetails from "./BellingDetails/BillingDetails";
import BillingHead from "./BillingHead";
import PriceDetails from "./PriceDetails/PriceDetails";

const BillingSetting = () => {
  return (
    <div className="p-4">
      <p className="text-left">Billing</p>
      <div className="my-2">
        <BillingHead />
      </div>
      <div className="mb-2">
        <BillingDetails />
      </div>
      <div className="">
        <PriceDetails />
      </div>
    </div>
  );
};

export default BillingSetting;
