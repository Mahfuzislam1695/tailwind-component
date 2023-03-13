import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Popup = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div>1</div>
      <div>2</div>
      <div className="bg-black">
        <p className="text-white text-center">WAIT!!!</p>
        <p className="text-white text-center">BEFORE YOU GO TAKE</p>
        <p className="text-white text-center">40% OFF</p>
        <p className="text-white text-center">OFF ANY PRODUCT</p>
      </div>
      <div className="py-2 px-2">
        <p>HOW ARE YOU SHOPPING FOR TODAY ?</p>
        <div className="flex items-center justify-center gap-4">
          <p className="basis-2/4 text-left">Men Clothing</p>
          <div className="basis-2/4 text-left">
            <BsArrowRight />
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <p className="basis-2/4 text-left">Women Clothing</p>
          <div className="basis-2/4 text-left">
            <BsArrowRight />
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <p className="basis-2/4 text-left">Kids Clothing</p>
          <div className="basis-2/4 text-left">
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
