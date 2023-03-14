import React from "react";
import ProfileDetails from "./ProfileDetails";
import ProfileHeading from "./ProfileHeading";
import TransactionHis from "./TransactionHis";

const AccountSetting = () => {
  return (
    <div className="p-4">
      <p className="text-left">Account Details</p>
      <div className="my-2">
        <ProfileHeading />
      </div>
      <div className="mb-2">
        <ProfileDetails />
      </div>
      <div className="">
        <TransactionHis />
      </div>
    </div>
  );
};

export default AccountSetting;
