import React from "react";
import { FaBeer } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { MdHelp } from "react-icons/md";

const SettingSidebar = () => {
  return (
    <div className="flex flex-col gap-4 h-screen">
      <div className="flex items-center px-3 py-2 gap-2">
        <FaBeer fontSize={20} />
        <span>ACCOUNT</span>
      </div>
      <div className="flex items-center px-3 py-2 gap-2">
        <TfiWorld fontSize={20} />
        <span>DOMAINS</span>
      </div>
      <div className="flex items-center px-3 py-2 gap-2">
        <TfiWorld fontSize={20} />
        <span>BILLING</span>
      </div>
      <div className="flex items-center px-3 py-2 gap-2">
        <FaBeer fontSize={20} />
        <span>TEAM</span>
      </div>
      <div className="flex items-center px-3 py-2 gap-2">
        <MdHelp fontSize={20} />
        <span>SUPPORT</span>
      </div>
    </div>
  );
};

export default SettingSidebar;
