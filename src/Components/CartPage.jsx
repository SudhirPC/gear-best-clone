import React from 'react'

export const CartPage = () => {
  return (
    <div className="ml-16 mt-4">
        <div className="w-11/12 flex bg-gray-100">
            <div className="w-2/5 p-2 pl-4 ml-6">Selected Item(s)</div>
            <div className="w-1/6 p-2 pl-4 ml-6">Unit Price</div>
            <div className="w-1/6 p-2 pl-4 ml-6">Subtotal</div>
            <div className="w-1/6 p-2 pl-4 ml-6">Operation</div>
        </div>
        <div className="w-11/12 h-28 mt-4 flex bg-gray-100">
            <div className="w-2/5 p-2 pl-4 ml-6">
                <img src="" alt="" />
                <p>description</p>
            </div>
            <div className="w-2/5 p-2 pl-4 ml-6">
                
            </div>
            <div className="w-2/5 p-2 pl-4 ml-6"></div>
            <div className="w-2/5 p-2 pl-4 ml-6 mt-8">
                <button className="ml-20 ">Delete</button>
            </div>
        </div>
    </div>
  )
}