import React from "react";
import { Progress } from "antd";
import { MdKeyboardArrowRight } from "react-icons/md";

function AddExpense({ title, icon1, value, totalValue }) {
  let barvalue = (value / totalValue) * 100;

  return (
    <div className="py-2 flex items-center justify-between">
      <div className=" button-bg-color rounded-full px-3 py-2  mr-2 ">
        <div>{icon1}</div>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <div className="font-color-blue text-xl font-bold my-1">{title}</div>
          <div className="text-white text-lg font-semibold">
            {value}
            <span className="font-color-blue text-lg font-semibold">
              /{totalValue}
            </span>
          </div>
        </div>

        <div>
          <Progress
            strokeColor={{
              "0%": "#23d7be",
              "100%": "#5e17a5",
            }}
            trailColor="#231882"
            percent={barvalue}
            showInfo={false}
          />
        </div>
      </div>

      <div className=" button-bg-color rounded-full ml-2 ">
        <MdKeyboardArrowRight className="text-white text-2xl " />
      </div>
    </div>
  );
}

export default AddExpense;
