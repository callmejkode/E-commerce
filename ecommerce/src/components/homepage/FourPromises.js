import React from "react";
import {
  FaRegSave,
  FaRocketchat,
  FaNutritionix,
  FaRegWindowMinimize,
} from "react-icons/fa";

function FourPromises() {
  return (
    <>
      <div className="row">
        <div className="col w-100 ">
          <div className="row pb-2">
            <FaRegSave />
          </div>
          <div className="row text-center">
            <p>Super Fast and Free Delivery</p>
          </div>
        </div>
        <div className="col w-100 ">
          <div>
            <div className="row">
              <div className="row pb-2">
                <FaRegWindowMinimize />
              </div>
              <div className="row text-center">
                <p>Non-contact Shipping</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="row pb-2">
              <FaRocketchat />
            </div>
            <div className="row text-center">
              <p>Money-back Guareanteed</p>
            </div>
          </div>
        </div>
        <div className="col w-100 ">
          <div className="row">
            <div className="row pb-2">
              <FaNutritionix />
            </div>
            <div className="row text-center">
              <p>Super Secure Payment System</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FourPromises;
