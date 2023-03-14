import React from "react";

const DomainList = () => {
  return (
    <div className="py-8 px-8  mx-auto bg-white rounded-xl shadow-lg space-y-4">
      <div className="gap-2 grid">
        <div className="grid grid-cols-5 gap-4 ">
          <div className="col-span-4 border border-black p-1 rounded">
            <div className="flex justify-between">
              <p>WWW.MIKEEPPS.COM</p>
              <div>verified</div>
            </div>
          </div>
          <div className="col-span-1">
            <button className="border border-black h-full w-full rounded">
              DELETE
            </button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 ">
          <div className="col-span-4 border border-black p-1 rounded">
            <div className="flex justify-between">
              <p>WWW.MIKEEPPS.COM</p>
              <div>verified</div>
            </div>
          </div>
          <div className="col-span-1">
            <button className="border border-black h-full w-full rounded">
              DELETE
            </button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 ">
          <div className="col-span-4 border border-black p-1 rounded">
            <div className="flex justify-between">
              <p>WWW.MIKEEPPS.COM</p>
              <div>verified</div>
            </div>
          </div>
          <div className="col-span-1">
            <button className="border border-black h-full w-full rounded">
              DELETE
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 ">
        <div className="col-span-4 items-start justify-start flex ">
          <button className="border border-black h-full w-2/12 rounded uppercase">
            New domain
          </button>
        </div>
        <div className="col-span-1">
          <button className="border border-black h-full w-full rounded uppercase">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DomainList;
