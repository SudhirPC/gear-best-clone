import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { GetWatchDataFromEnd, Logouthandleraction } from "./Redux/Action.js";
export const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const userId = useSelector((state) => state.gearbest.userId);
  const userName = useSelector((state) => state.gearbest.userName);
  const cartNo = useSelector((state) => state.gearbest.cart1);
  console.log("userName navbar", userName);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logouthandler = () => {
    dispatch(Logouthandleraction());
    navigate("/");
  };
  const handleToggle = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    console.log(visible);
  };

  useEffect(() => {
    GetWatchDataFromEnd();
  }, [cartNo, dispatch]);
  return (
    <div className="navbar">
      <div className="flex">
        <div className="w-1/5 p-4 ">
          <Link to="/">
            <img
              className="h-20"
              src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png"
              alt=""
            />
          </Link>
        </div>
        <div className="w">
          <div className=" flex ml-64 pt-4 mb-4">
            <div className="flex mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <div className="bg-white">
                <div className="bg-white">
                  <div className="dropdown inline-block relative  bg-white">
                    <p className=" font-small  bg-white rounded inline-flex ">
                      <span>
                        {" "}
                        <p>Save $3 with App </p>
                      </span>
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                      </svg>
                    </p>
                    <ul className="dropdown-menu  absolute top-0 z-10 bg-white hidden text-gray-700 w-80 h-80 pl-16 font-bold text-sm">
                      <li className="">
                        <h1 className="text-xl text-black bg-white">
                          Download App!
                        </h1>
                      </li>
                      <li className="bg-white">
                        <p>Save $3 with App & New User Only</p>
                      </li>
                      <li className="mt-3 bg-white">
                        <div className="flex bg-white">
                          <div className="bg-white">
                            <img
                              className="h-20 w-35 ml-1 mr-4"
                              src="https://media.istockphoto.com/photos/close-up-of-qr-code-example-picture-id518484289?s=612x612"
                              alt=""
                            />
                          </div>
                          <div className="bg-white">
                            <img
                              className="h-20 w-35 ml-1 bg-white"
                              src="https://thumbs.dreamstime.com/b/app-store-155321652.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mr-2">
              <p>Support Center</p>
            </div>
            <div className="w-24 mr-2">
              <p className="flex">Ship to USD</p>
            </div>
            <div className=" mr-2">
              <p>Language</p>
            </div>
            <div className="">
              <div className="dropdown  relative flex">
                <p className=" text-s  rounded flex items-center">
                  <span className="mr-1">
                    <p>Country Website </p>
                  </span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </p>
                <ul className="dropdown-menu absolute z-10 hidden text-gray-700 pt-1">
                  <li className="">
                    <a
                      className="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Global(English)
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      France
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="rounded-b bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      España
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Россия
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Portugal
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="rounded-b bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Italia
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      India
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="rounded-b bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Deutschland
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className=" flex ml-32 border-2 bg-yellow-500 border-yellow-500 w-6/12 rounded-2xl ">
              <div className="w-12 flex relative">
                <p className="m-1 pl-2 cursor-pointer" onClick={handleToggle}>
                  All
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mt-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className={visible ? "block" : "hidden"}>
                  <div className="mt-10 h-96 w-40 overflow-y-auto  bg-white  border absolute left-1/3 z-10 ">
                    <p className="text-orange-500">All</p>
                    <p>MARKETPLACE</p>
                    <p> Gearbest Selection</p>
                    <p>Appliances</p>
                    <p>Cell Phones & Accessories</p>
                    <p>Women's Bags</p>
                    <p>Computers, Tablets & Office</p>
                    <p>Consumer Electronics</p>
                    <p>Drones, Toys & Hobbies</p>
                    <p>Home Improvement & Tools</p>
                    <p>Home & Garden</p>
                    <p>Industrial & Scientific</p>
                    <p>Motor & Car Electronics</p>
                    <p>Outdoors, Fitness & Sports</p>
                    <p>Watches & Jewelry</p>
                    <p>Women</p>
                    <p>Women's Fashion</p>
                    <p>Men's Fashion</p>
                  </div>
                </div>
              </div>

              <input
                className="w-10/12 ml-2 pl-2 "
                type="text"
                placeholder="Xiomi Mobile"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 m-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-8 flex">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className=" pt-2">
                {userName !== "" ? (
                  <div className="flex ">
                    <div className="font-small cursor-pointer ">
                      Hi {userName}
                    </div>{" "}
                    <div
                      onClick={() => {
                        logouthandler();
                      }}
                      className="ml-4 cursor-pointer"
                    >
                      Logout
                    </div>
                  </div>
                ) : (
                  <Link to="/register" className="font-small mt-8">
                    Sign In
                  </Link>
                )}
              </div>
            </div>
            {/* <div className="ml-8 mt-2 flex">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              
            </div> */}
            <Link to="/cart">
              <div className="ml-4 mt-2 flex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="flex">
                  <p>Cart </p>
                  {userId ? (
                    <div className="font-medium">:{cartNo.length}</div>
                  ) : (
                    0
                  )}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex bg-yellow-300 mt-4 h-10 text-center leading-9 ">
        <div className="w-1/5 bg-black text-white">Category</div>
        <div className="w-1/5 hover:underline">SUPER DEALS</div>
        <div className="w-1/5 hover:underline">APP ONLY</div>
        <div className="w-1/5 hover:underline">NEW ARRIVALS</div>
        <div className="w-1/5"></div>
      </div>
    </div>
  );
};
