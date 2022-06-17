import React from "react";
import {Link} from "react-router-dom"
export const CheckoutPage = () => {
  return (
    <div className="ml-48 inputContainer">
      <div>
        {/* <img className="ml-16 w-56 h-28" src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png" alt="" />  */}
      </div>
      <div>
        <p className="font-bold text-xl">Add New Address</p>
        <div>
          <div className="w-3/4">
            <div className="flex w-1/2">
              <div className="w-1/2 ml-6">
                <p>First Name:</p>
              </div>
              <div className="w-1/2 ml-2">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>

            <div className="flex w-1/2 mt-4">
              <div className="w-1/2 ml-6">
                <p>Last Name:</p>
              </div>
              <div className="w-1/2 -ml-2">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>

            <div className="flex w-1/2 mt-4">
              <div className="w-1/2 ml-6">
                <p>Address Line 1:</p>
              </div>
              <div className="w-1/2 -ml-2">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>

            <div className="flex w-1/2 mt-4">
              <div className="w-1/2 ml-6">
                <p>Address Line 2 :</p>
              </div>
              <div className="w-1/2 -ml-2">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>

            <div className="flex w-1/2 mt-4">
              <div className="w-1/2 ml-6">
                <p>Country::</p>
              </div>
              <div className="w-1/2 -ml-2">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>

            <div className="flex w-1/2 mt-4">
              <div className="w-1/2 ml-6">
                <p>State :</p>
              </div>
              <div className="w-1/2 -ml-2">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>

            <div className="flex w-1/2 mt-4">
              <div className="w-1/2 ml-6">
                <p>City : </p>
              </div>
              <div className="w-1/2 -ml-2">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>

            <div className="flex w-1/2 mt-4">
              <div className="w-1/2 ml-6">
                <p>ZIP / Postal Code:</p>
              </div>
              <div className="w-1/2 -ml-2">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>

            <div className="flex w-1/2 mt-4">
              <div className="w-1/2 ml-6">
                <p>Phone Number:</p>
              </div>
              <div className="w-1/2 -ml-2">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>

            <div className="flex w-1/2 mt-4">
              <div className="w-1/2 ml-6">
                <p>Email-Address:</p>
              </div>
              <div className="w-1/2 -ml-2">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>
          </div>
          <div>
            <button className="border-gray-700 border-2 mt-6 ml-16 text-black font-2xl font-semibold bg-yellow-300  w-40">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
