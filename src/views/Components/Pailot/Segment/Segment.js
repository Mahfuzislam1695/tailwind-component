import React from "react";
import { BsArrowRight } from "react-icons/bs";
import DefaultTar from "./DefaultTar";
import VisitorBe from "./VisitorBe";

const Segment = () => {
  return (
    <div className="p-2">
      <div>
        <p>Segment And Target</p>
        <p>
          Set Your Targeting For Your Companign And Then Activate It To Go Live
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4 divide-x">
        <div className="col-span-1">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between border p-2">
              <p>Default Targeting</p>
              <div className="flex justify-center items-center">
                <BsArrowRight />
              </div>
            </div>
            <div className="flex justify-between border p-2">
              <p>Default Targeting</p>
              <div className="flex justify-center items-center">
                <BsArrowRight />
              </div>
            </div>
            <div className="flex justify-between border p-2">
              <p>Default Targeting</p>
              <div className="flex justify-center items-center">
                <BsArrowRight />
              </div>
            </div>
            <div className="flex justify-between border p-2">
              <p>Default Targeting</p>
              <div className="flex justify-center items-center">
                <BsArrowRight />
              </div>
            </div>
            <div className="flex justify-between border p-2">
              <p>Default Targeting</p>
              <div className="flex justify-center items-center">
                <BsArrowRight />
              </div>
            </div>
            <div className="flex justify-between ">
              <button>save</button>
              <button>save</button>
            </div>
          </div>
        </div>
        <div className="col-span-3 ">
          <div>
            <DefaultTar />
          </div>
          <div className="my-2">
            <VisitorBe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Segment;
