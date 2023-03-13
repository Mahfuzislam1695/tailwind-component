import React from "react";
import bg1 from "../../../../asset/HP Pavilion 15-n230us Notebook PC.jpg";

const VisitorBe = () => {
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
        <button>Add Trigger</button>
      </div>
    </div>
  );
};

export default VisitorBe;
