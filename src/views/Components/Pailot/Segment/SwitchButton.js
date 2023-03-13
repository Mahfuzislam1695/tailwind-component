import React, { useState } from "react";
import "./SwitchButton.css";

function SwitchButton({ setChecked }) {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className=" p-80">
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <div className="flex">
          <label class="inline-flex relative items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={enabled}
              readOnly
            />
            <div
              onClick={() => {
                setEnabled(!enabled);
              }}
              className="w-24 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-16 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600 pl-2 pr-2"
            >
              {enabled ? (
                <p className="text-start ">Active</p>
              ) : (
                <p className="text-right">Inactive</p>
              )}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SwitchButton;
