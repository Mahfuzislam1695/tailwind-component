import React from "react";
import DomainList from "./DomainList";
import EmbedCode from "./EmbedCode";

const DomainSetting = () => {
  return (
    <div className="p-4">
      <p className="text-left">Domains</p>
      <div className="my-4">
        <DomainList />
      </div>
      <div className="">
        <EmbedCode />
      </div>
    </div>
  );
};

export default DomainSetting;
