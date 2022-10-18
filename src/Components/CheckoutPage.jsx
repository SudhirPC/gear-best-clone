import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"
export const CheckoutPage = () => {

  const cartData=useSelector((state)=>state.gearbest.cart1)
  console.log(cartData)
  let total = cartData.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.price;
  }, 0);
  console.log("total",total)
  
  return (
    <div>
        <div className="ml-28 flex inputContainer">
          
      <div>
        <p className="font-bold  mt-8 text-xl">Add New Address</p>
        <div>
          <div className="w-96 mt-4">
            {/* <div className="flex w-96">
              <div className="w-24 ">
                <p>First Name:</p>
              </div>
              <div className="w-1/2 ml-16">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>

            <div className="flex w-72 mt-4">
              <div className="w-24">
                <p>Last Name:</p>
              </div>
              <div className="w-1/2 ml-16">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div> */}
            <div className="flex w-96 mt-4">
              <div className="w-44">
                <p>First Name:</p>
              </div>
              <div className="w-1/2 ml-16">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>
            <div className="flex w-96 mt-4">
              <div className="w-44">
                <p>Last Name:</p>
              </div>
              <div className="w-1/2 ml-16">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>
            <div className="flex w-96 mt-4">
              <div className="w-44">
                <p>Address Line 1:</p>
              </div>
              <div className="w-1/2 ml-16">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>
            <div className="flex w-96 mt-4">
              <div className="w-44">
                <p>Address Line 2:</p>
              </div>
              <div className="w-1/2 ml-16">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>
            <div className="flex w-96 mt-4">
              <div className="w-44">
                <p>Country:</p>
              </div>
              <div className="w-1/2 ml-16">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>
            <div className="flex w-96 mt-4">
              <div className="w-44">
                <p>State :</p>
              </div>
              <div className="w-1/2 ml-16">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>
            <div className="flex w-96 mt-4">
              <div className="w-44">
                <p>City :</p>
              </div>
              <div className="w-1/2 ml-16">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>
            <div className="flex w-96 mt-4">
              <div className="w-44">
                <p>ZIP / Postal Code:</p>
              </div>
              <div className="w-1/2 ml-16">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>
            <div className="flex w-96 mt-4">
              <div className="w-44">
                <p>Phone No :</p>
              </div>
              <div className="w-1/2 ml-16">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>
            <div className="flex w-96 mt-4">
              <div className="w-44">
                <p>Email Address:</p>
              </div>
              <div className="w-1/2 ml-16">
                <input className="border-gray-700 border-2  w-40" type="text" />
              </div>
            </div>
          </div>
          <Link to="/payment">  <div>
         <button className="border-gray-700 border-2 mt-6 ml-16 text-black font-2xl font-semibold bg-yellow-300  w-40"> 
              Confirm
            </button>
          </div></Link> 
        </div>
      </div>
      <div>

      <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div className="pt-12 md:pt-0 2xl:ps-4">
              <h2 className="text-xl  mt-8 font-bold">Order Summary</h2>
              <div className="mt-8">
                <div className="flex flex-col space-y-4">
                  {/* iterable div */}
                {cartData.map((e)=>{
                  return (
                    <div className="flex space-x-4">
                    <div>
                      <img
                        src={e.image}
                        alt="image"
                        className="w-60"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{e.title}</h2>
                      
                      <span className="text-red-600">{Number(e.price).toFixed(2)}</span> 
                    </div>
                  
                  </div>
                  )
                })}
                </div>
              </div>
              <div className="flex bg-yellow-500 pt-1 items-center w-48 h-18 pl-8 ml-56 text-sm font-semibold border-b border-gray-300  text-heading last:border-b-0 last:text-base last:pb-0">
              Total Price: <p className="ml-2">${total.toFixed(2)}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}
