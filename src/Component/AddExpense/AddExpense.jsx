import React, { useState } from "react";
import { Progress } from "antd";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";

const expenseData = [
  {
    title: "Transport",
    icon1: <FaCarSide className="text-white text-2xl " />,
    value: 20,
    totalValue: 100,
  },
  {
    title: "Food",
    icon1: <GiMeal className="text-white text-2xl " />,
    value: 80,
    totalValue: 100,
  },
  {
    title: "Shoping",
    icon1: <AiOutlineShopping className="text-white text-2xl " />,
    value: 60,
    totalValue: 100,
  },
];

function AddExpense() {
  const [expense] = useState(expenseData);

  return (
    <>
      {expense.map((item, ind) => {
        let barvalue = (item.value / item.totalValue) * 100;
        return (
          <div className="py-2 flex items-center justify-between" key={ind}>
            <div className=" button-bg-color rounded-full px-3 py-2  mr-2 ">
              <div>{item.icon1}</div>
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center">
                <div className="font-color-blue text-xl font-bold my-1">
                  {item.title}
                </div>
                <div className="text-white text-lg font-semibold">
                  {item.value}
                  <span className="font-color-blue text-lg font-semibold">
                    /{item.totalValue}
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
                  // percent={(item.value / item.totalValue) * 100}
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
      })}
    </>
  );
}

export default AddExpense;
