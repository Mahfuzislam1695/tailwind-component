import React, { useState } from "react";
import IntegrateCard from "./IntegrateCard";
import bg1 from "../../../../asset/HP Pavilion 15-n230us Notebook PC.jpg";

const Integrate = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="p-2">
      <div>
        <p className="text-start">Integrate With</p>
        <p className="text-start">Set your</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <IntegrateCard cardDis="Lorem ipsum dolor sit, amet consectetur adipisicing elit" />
        <IntegrateCard
          cardHead="Sendinbule"
          cardDis="Lorem ipsum dolor sit, amet consectetur adipisicing elit"
        />
        <IntegrateCard
          cardHead="google"
          cardSubhead="Google Analytics lets you measure your advertising ROI as well as track your Flash"
        />

        <IntegrateCard cardDis="Lorem ipsum dolor sit, amet consectetur adipisicing elit" />
        <IntegrateCard cardDis="Lorem ipsum dolor sit, amet consectetur adipisicing elit" />
        <IntegrateCard cardDis="Lorem ipsum dolor sit, amet consectetur adipisicing elit" />
        <IntegrateCard cardDis="Lorem ipsum dolor sit, amet consectetur adipisicing elit" />
        <IntegrateCard cardDis="Lorem ipsum dolor sit, amet consectetur adipisicing elit" />
        <IntegrateCard cardDis="Lorem ipsum dolor sit, amet consectetur adipisicing elit" />
        <IntegrateCard cardDis="Lorem ipsum dolor sit, amet consectetur adipisicing elit" />
      </div>
      <div className="mt-4">
        <p className="text-start">Notification</p>
        <p className="text-start">Add</p>
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        <div className="p-6 flex items-start space-x-4 bg-white rounded-xl shadow-lg  relative">
          <div className="shrink-0">
            <img className="h-12 w-12" src={bg1} alt="ChitChat Logo" />
          </div>
          <div>
            <div className="text-xl text-left font-medium text-black">
              ChitChat
            </div>
            <p className="text-slate-500">You have a new message!</p>
          </div>

          <div className="absolute right-0 bottom-0 mr-4 mb-2">
            <label class="inline-flex relative items-center mr-5 cursor-pointer w-16">
              <input
                type="checkbox"
                className="sr-only peer w-16"
                checked={enabled}
                // readOnly
              />
              <div
                onClick={() => {
                  setEnabled(!enabled);
                }}
                className="w-12 h-6  bg-gray-200 rounded-full peer  peer-focus:ring-green-300   peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:right-0 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:items-end after:transition-all peer-checked:bg-green-600"
              >
                {enabled ? (
                  <p className="text-left">on</p>
                ) : (
                  <div className="text-right">off</div>
                )}
              </div>
            </label>
          </div>
        </div>

        <div className="p-6 flex items-start space-x-4 bg-white rounded-xl shadow-lg relative">
          <div className="shrink-0">
            <img className="h-12 w-12" src={bg1} alt="ChitChat Logo" />
          </div>
          <div>
            <div className="text-xl text-left font-medium text-black">
              ChitChat
            </div>
            <p className="text-slate-500">You have a new message!</p>
          </div>
          <div className="absolute right-0 bottom-0 mr-4 mb-2">
            <label class="inline-flex relative items-center mr-5 cursor-pointer w-16">
              <input
                type="checkbox"
                className="sr-only peer w-16"
                checked={enabled}
                // readOnly
              />
              <div
                onClick={() => {
                  setEnabled(!enabled);
                }}
                className="w-12 h-6  bg-gray-200 rounded-full peer  peer-focus:ring-green-300   peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:right-0 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:items-end after:transition-all peer-checked:bg-green-600"
              >
                {enabled ? (
                  <p className="text-left">on</p>
                ) : (
                  <div className="text-right">off</div>
                )}
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end gap-4">
        <button>button</button>
        <button>button</button>
      </div>
    </div>
  );
};

export default Integrate;
