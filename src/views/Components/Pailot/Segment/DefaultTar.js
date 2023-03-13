import React, { useState } from "react";
import bg1 from "../../../../asset/HP Pavilion 15-n230us Notebook PC.jpg";
import SwitchButton from "./SwitchButton";

const DefaultTar = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="flex justify-between bg-white rounded-xl shadow-lg">
      <div className="p-6 flex items-start space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src={bg1} alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl text-left font-medium text-black">
            ChitChat
          </div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>

      <div className="flex items-center">
        <button>Edit</button>
      </div>

      <div className="flex items-center">
        {/* <SwitchButton checked={checked} setChecked={setChecked} /> */}
        <div className="relative flex flex-col  overflow-hidden">
          <div className="flex">
            <label class="inline-flex relative items-center mr-5 cursor-pointer">
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
                className="w-20 h-6  bg-gray-200 rounded-full peer  peer-focus:ring-green-300   peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:right-0 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:items-end after:transition-all peer-checked:bg-green-600"
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
    </div>
  );
};

export default DefaultTar;
