import React from "react";
import { IoMdAdd } from "react-icons/io";
import SavingsBar from "../Chart/SavingsBar";

function Goal() {
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="text-white text-lg font-semibold">Goal</p>
        <p className="button-bg-color rounded-full px-2 py-2">
          <IoMdAdd className="text-white text-2xl " />
        </p>
      </div>
      <div>
        <p className="text-white text-xl font-normal mt-4 ">To Buy an iPhone</p>
        <p className="text-white text-lg font-semibold mt-2">
          ₹50000
          <span className="font-color-blue ml-2">March/April 2022</span>
        </p>
        <p className="my-6 text-white text-lg font-semibold ">
          Save{" "}
          <span className="font-color text-lg font-semibold mr-2">₹869</span>a
          month
          <span className="font-color-blue ml-2">(6 months left)</span>
        </p>
        <SavingsBar totalAmount={50000} savingAmountPerMonth={980} />
      </div>
    </>
  );
}

export default Goal;
