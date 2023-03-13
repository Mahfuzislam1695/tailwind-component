import React from "react";
import bg1 from "../../../../asset/HP Pavilion 15-n230us Notebook PC.jpg";

const Publish = () => {
  return (
    <div className="">
      <p className="text-center">your campaign is live</p>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
        obcaecati.
      </p>
      <div className="flex justify-center items-center">
        <img className="h-10 rounded-full " src={bg1} alt="" />
      </div>
      <div className="flex justify-center gap-4">
        <div className="border py-0.5 px-4">1</div>
        <div className="border py-0.5 px-4">2</div>
        <div className="border py-0.5 px-4">3</div>
      </div>
    </div>
  );
};

export default Publish;
