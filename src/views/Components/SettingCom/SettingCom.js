import React from "react";
import AccountSetting from "./AccountSetting/AccountSetting";
import BillingSetting from "./BillingSetting/BillingSetting";
import DomainSetting from "./DomainSetting/DomainSetting";
import SettingSidebar from "./SettingSidebar";

const SettingCom = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1 border ">
        <SettingSidebar />
      </div>
      <div className="col-span-4 border">
        {/* <AccountSetting /> */}
        {/* <DomainSetting /> */}
        <BillingSetting />
      </div>
    </div>
  );
};

export default SettingCom;
