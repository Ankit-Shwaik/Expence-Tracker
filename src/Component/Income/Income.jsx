import React from "react";

function Income({ title, shortdes, amount }) {
  return (
    <div className="flex item-center justify-between py-1 border-bottom ">
      <div>
        <div className="text-white text-base font-bold">{title}</div>
        <div className="text-base font-normal font-color-blue">{shortdes}</div>
      </div>
      <div className="font-color text-sm font-semibold rounded-full border-col-sky  my-2 px-4 py-2 text-center">
        {amount}
      </div>
    </div>
  );
}

export default Income;
