import React from "react";
import { FaCarSide } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { GiMeal } from "react-icons/gi";
import { IoMdAdd } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import AddExpense from "../Add Expense/AddExpense";
import BarChart from "../Chart/BarChart";
import Navbar from "../Navbar/Navbar";
import Income from "../Income/Income";
import PieChart from "../Chart/PieChart";

function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-color ">
        <div className="container-wrapper px-2">
          <div className="lg:flex justify-between py-2  ">
            <div className="px-10 grad rounded-2xl w-7/12 ">
              <p className="text-white text-lg font-medium">Expenses</p>
              <BarChart />
            </div>

            <div className="px-12 grad rounded-2xl py-1 w-4/12">
              <p className="text-white text-3xl font-semibold text-right mb-8">
                August 14
              </p>
              <div className="border-bottom">
                <AddExpense
                  title="Transport"
                  icon1={<FaCarSide className="text-white text-2xl " />}
                />
                <AddExpense
                  title="Food"
                  icon1={<GiMeal className="text-white text-2xl " />}
                />
                <AddExpense
                  title="Shopping"
                  icon1={<AiOutlineShopping className="text-white text-2xl " />}
                />
              </div>
            </div>
          </div>

          <div className="lg:flex justify-between py-6">
            <div className="px-4 grad rounded-2xl w-1/3 py-3">
              <div className="flex justify-between items-center">
                <p className="text-white text-lg font-semibold">
                  The highest expense
                </p>
                <p className="button-bg-color rounded-full px-2 py-2">
                  <MdKeyboardArrowRight className="text-white text-2xl " />
                </p>
              </div>
              <div>
                <PieChart />
              </div>
            </div>
            <div className="px-4 grad rounded-2xl w-1/3 mx-2  py-3">
              <div className="flex justify-between items-center">
                <p className="text-white text-lg font-semibold">Goal</p>
                <p className="button-bg-color rounded-full px-2 py-2">
                  <IoMdAdd className="text-white text-2xl " />
                </p>
              </div>
              <div>
                <p className="text-white text-xl font-normal mt-4 ">
                  To Buy an iPhone
                </p>
                <p className="text-white text-lg font-semibold mt-2">
                  ₹50000
                  <span className="font-color-blue ml-2">March/April 2022</span>
                </p>
                <p className="my-6 text-white text-lg font-semibold ">
                  Save{" "}
                  <span className="font-color text-lg font-semibold mr-2">
                    ₹869
                  </span>
                  a month
                  <span className="font-color-blue ml-2">(6 months left)</span>
                </p>
              </div>
            </div>
            <div className="px-4 grad rounded-2xl w-1/3 mx-2 py-3">
              <div className="flex justify-between items-center">
                <p className="text-white text-lg font-semibold">Income </p>
                <p className="button-bg-color rounded-full px-2 py-2">
                  <MdKeyboardArrowRight className="text-white text-2xl " />
                </p>
              </div>
              <div className="mt-3 ">
                <Income
                  amount="₹635"
                  title="Zasya Solution"
                  shortdes="salary"
                />
                <Income amount="₹4000" title="FD" shortdes="Savings" />
                <Income amount="₹1000" title="Pay Pal" shortdes="credit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
