import React, { useState } from "react";

const incomeData = require("../Data/Icome.json");

function Income() {
  const [income] = useState(incomeData);
  return (
    <>
      {income.map((item, ind) => (
        <div
          className="flex item-center justify-between py-1 border-bottom "
          key={ind}
        >
          <div>
            <div className="text-white text-base font-bold">{item.title}</div>
            <div className="text-base font-normal font-color-blue">
              {item.shortdes}
            </div>
          </div>
          <div className="font-color text-sm font-semibold rounded-full border-col-sky  my-2 px-4 py-2 text-center">
            {item.amount}
          </div>
        </div>
      ))}
    </>
  );
}

export default Income;
