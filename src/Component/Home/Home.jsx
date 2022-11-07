import React, { useState } from "react";
import { Input, Modal } from "antd";
import { MdKeyboardArrowRight } from "react-icons/md";
import AddExpense from "../AddExpense/AddExpense";
import BarChart from "../Chart/BarChart";
import Navbar from "../Navbar/Navbar";
import Income from "../Income/Income";
import PieChart from "../Chart/PieChart";
import Goal from "../My Goals/Goal";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log("clicked", isModalOpen);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="bg-color ">
        <div className="container-wrapper  px-4 ">
          <div className="lg:flex justify-between   ">
            <div className="px-2 lg:px-10 grad rounded-2xl w-full lg:w-8/12 ">
              <p className="text-white text-lg font-medium">Expenses</p>
              <BarChart />
            </div>

            <div className="px-2 lg:px-12 grad rounded-2xl py-1 w-full lg:w-4/12 lg:ml-2 my-2 lg:my-0">
              <p className="text-white text-3xl font-semibold text-right mb-8">
                August 14
              </p>
              <div className="border-bottom">
                <AddExpense />
              </div>
              <div className="text-center  my-6">
                <button
                  className="py-2 px-6 font-color-blue bg-btn rounded-full text-base font-bold"
                  onClick={() => {
                    showModal();
                  }}
                >
                  Add Expense
                </button>
              </div>
            </div>
          </div>

          <div className="lg:flex justify-between lg:py-2  ">
            <div className="px-4 grad rounded-2xl w-full lg:w-1/3  my-3 py-3">
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

            <div className="px-4 grad rounded-2xl w-full lg:w-1/3 lg:mx-2  my-3 py-3">
              <Goal />
            </div>

            <div className="px-4 grad rounded-2xl w-full lg:w-1/3   my-3 py-3">
              <div className="flex justify-between items-center">
                <p className="text-white text-lg font-semibold">Income </p>
                <p className="button-bg-color rounded-full px-2 py-2">
                  <MdKeyboardArrowRight className="text-white text-2xl " />
                </p>
              </div>
              <div className="mt-3 ">
                <Income />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <p>Title</p>
          <Input />
        </div>
        <div>
          <p>Title</p>
          <Input />
        </div>
        <div>
          <p>Title</p>
          <Input />
        </div>
      </Modal>
    </>
  );
}

export default Home;
