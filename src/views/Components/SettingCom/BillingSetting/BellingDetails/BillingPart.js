import React from "react";
import { FaCcMastercard } from "react-icons/fa";

const BillingPart = () => {
  return (
    <div className="w-full border border-black p-2 divide-y divide-black">
      <div>
        <div className="flex justify-between">
          <p>Billing Details</p>
          <button>edit</button>
        </div>

        <div className="flex justify-between ">
          <div>
            <div className="flex items-center gap-2">
              <div className="shrink-0">
                <FaCcMastercard fontSize={40} />
              </div>
              <div className="text-left">
                <h1 class="text-sm font-medium text-gray-700 capitalize dark:text-white">
                  CARD NUMBER
                </h1>

                <p class="text-xs text-gray-500 dark:text-gray-400">
                  ..... 300
                </p>
              </div>
              {/* <div className="border">
                <p className="text-left text-black text-lg">ChitChat</p>
                <p className="text-slate-500 text-sm">
                  You have a new message!
                </p>
              </div> */}
            </div>
          </div>
          <div>
            <p>expiry</p>
            <p>7/26</p>
          </div>
        </div>
      </div>
      <div className="flex py-2">
        <div className="basis-2/5">
          <p className="text-left ">Name</p>
          <p className="text-left">Kegan Mills</p>
        </div>
        <div className="basis-3/5">
          <p className="text-left ">Address</p>
          <p className="text-left">1234 Terrace</p>
          <p className="text-left">Manchester, Missouri</p>
          <p className="text-left">United States</p>
        </div>
      </div>
      <div className="py-1">
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          corporis in praesentium corrupti repudiandae eaque consectetur velit
          at, modi quasi eligendi labore enim, perspiciatis facere voluptatibus
          atque quod nesciunt aut.
        </p>
      </div>
    </div>
  );
};

export default BillingPart;
