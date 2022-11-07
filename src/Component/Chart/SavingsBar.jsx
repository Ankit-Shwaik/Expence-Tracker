import { Progress } from "antd";
import React from "react";

function SavingsBar({ savingAmountPerMonth, totalAmount }) {
  return (
    <Progress
      strokeColor={{
        "0%": "#23d7be",
        "100%": "#5e17a5",
      }}
      trailColor="#231882"
      percent={40}
      //   showInfo={false}
    />
  );
}

export default SavingsBar;
