import React from "react";
import bg1 from "../../../../asset/HP Pavilion 15-n230us Notebook PC.jpg";

const ProfileHeading = () => {
  return (
    <div className="py-8 px-8  mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 w-full">
      <img
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={bg1}
        alt="Woman's Face"
      />
      <div className="text-center space-y-2 sm:text-left w-full">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">Hi Jenni</p>
          <p className="text-slate-500 font-medium">Product Engineer</p>
        </div>

        <div className="flex justify-between">
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeading;
