import React from "react";
import BillingPart from "./BillingPart";
import TransactionPart from "./TransactionPart";

const BillingDetails = () => {
  return (
    <div className="w-full py-8 px-8 bg-white rounded-xl shadow-lg">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <BillingPart />
        </div>
        <div className="col-span-1">
          <TransactionPart />
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
