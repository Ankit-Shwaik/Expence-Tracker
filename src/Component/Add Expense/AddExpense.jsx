import React from "react";

import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

function AddExpense({ title, icon1 }) {
  return (
    <div className="py-2 flex items-center justify-between">
      <div className=" button-bg-color rounded-full px-3 py-3  mr-2 ">
        <div>{icon1}</div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <div className="font-color-blue text-xl font-bold ">{title}</div>
          <div className="text-white text-lg font-semibold">
            $15
            <span className="font-color-blue text-lg font-semibold">/$27</span>
          </div>
        </div>
        <div> Bar Bar Bar Bar Bar BarBar Bar </div>
      </div>

      <div className=" button-bg-color rounded-full ml-2 ">
        <MdKeyboardArrowRight className="text-white text-2xl " />
      </div>
    </div>
  );
}

export default AddExpense;
