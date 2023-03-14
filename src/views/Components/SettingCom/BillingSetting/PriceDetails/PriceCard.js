import React from "react";
import { BsCheck2 } from "react-icons/bs";

const PriceCard = ({ name }) => {
  return (
    <div className="w-full py-8 px-8 bg-white rounded-xl shadow-lg">
      <div className="flex flex-col justify-start items-start gap-2">
        <p className="">{name}</p>
        <p className="text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente
          quas fuga quod
        </p>
        {/* <div className="flex">
          <div>
            <p className="text-4xl">$40</p>
          </div>

          <div>
            <p>(usd)</p>
            <p>/Mo</p>
          </div>
        </div> */}
        <div className="flex items-center gap-2">
          <div className="shrink-0">
            <p className="text-4xl">$40</p>
          </div>
          <div className="text-left">
            <h1 class="text-sm font-medium text-gray-700 capitalize">(usd)</h1>

            <p class="text-xs text-gray-500 dark:text-gray-400">/Mo</p>
          </div>

          {/* <div className="border">
                <p className="text-left text-black text-lg">ChitChat</p>
                <p className="text-slate-500 text-sm">
                  You have a new message!
                </p>
              </div> */}
        </div>
        <p>
          Billed At <span className="line-through">$480 </span>$420/Yr Today
        </p>
        <button className="uppercase border py-1 px-6">Buy Now</button>
        <p>15,000 Pageviews / MO</p>

        <div className="flex flex-col justify-start items-start gap-2">
          <p>All Plans include:</p>
          <div>
            <div className="flex gap-1">
              <div className="flex justify-center items-center">
                <BsCheck2 />
              </div>{" "}
              <span>Unlimited Domains</span>
            </div>
            <div className="flex gap-1">
              <div className="flex justify-center items-center">
                <BsCheck2 />
              </div>{" "}
              <span>Unlimited Domains</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
