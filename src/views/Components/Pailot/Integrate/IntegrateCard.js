import React, { useState } from "react";
import bg1 from "../../../../asset/HP Pavilion 15-n230us Notebook PC.jpg";

const IntegrateCard = ({ cardHead, cardSubhead, cardDis }) => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="relative bg-white rounded-xl shadow-lg pt-2 px-2 pb-6">
      <div className="flex ">
        <div className="shrink-0">
          <img className="h-12 w-12" src={bg1} alt="ChitChat Logo" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-left font-medium text-black">
            {cardHead}
          </div>
          <p className="text-slate-500 text-left">{cardSubhead}</p>
        </div>
      </div>
      <p className="text-justify">{cardDis}</p>
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
  );
};

export default IntegrateCard;
