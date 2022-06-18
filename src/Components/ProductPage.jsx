import React, { useEffect, useState } from "react";
import axios from "axios"
export const ProductPage = () => {
    const [watch, setWatch] = useState([]);
  const getWatch = () => {
    axios
      .get("http://localhost:8080/watches")
      .then((res) => {
        console.log(res.data);
        setWatch(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getWatch();
  }, []);

  console.log("watch", watch)
  return (
    <div className="flex">
      {/* left side baar  */}
      <div className="w-3/12 ml-10 mt-4 font-bold overflow-scroll">
        <div className="flex">
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <p>BACK</p>
        </div>
        <div className="mt-4 ml-2 mb-4 font-bold">
          <p>Smart Watches</p>
        </div>
        <div className="mt-4 ml-2 mb-4   ">
          <p className="font-bold">NARROW SEARCH RESULTS</p>
          <p className="font-normal">ON SALE</p>
          <p className="font-normal">IN STOCK</p>
          <p className="font-bold mt-4">Compatible OS</p>
          <p className="font-normal">IOS</p>
          <p className="font-normal">ANDROID</p>
          <p className="font-bold mt-4">Health Tracker </p>
          <p className="font-normal">BLOOD PRESSURE</p>
          <p className="font-normal">SEDENTARY REMINDER</p>
          <p className="font-normal">PEDOMETER</p>
          <p className="font-normal">SLEEP MONITOR</p>
          <p className="font-bold mt-4">Other Functions</p>
          <p className="font-normal">ALARM</p>
          <p className="font-bold mt-4">Notification Type</p>
          <p className="font-normal">SKYPE</p>
          <p className="font-normal">WE CHAT</p>
          <p className="font-normal">FACEBOOK</p>
          <p className="font-normal">TWITTER</p>
          <p className="font-bold mt-4">OPERATING MODE </p>
          <p className="font-normal">TOUCH SCREEN</p>
          <p className="font-bold mt-4">Language</p>
          <p className="font-normal">ENGLISH</p>
          <p className="font-normal">GERMAN</p>
          <p className="font-normal">HINDI</p>
          <p className="font-normal">SPANISH</p>
          <p className="font-bold mt-4">Hot Search</p>
          <p className="font-normal">Wrist Bracelet</p>
          <p className="font-normal">Smartwatch Strap</p>
          <p className="font-normal">Outdoor Smartwatch</p>
          <p className="font-normal">Fashion Bracelet</p>
          <p className="font-normal">Tracker Bracelet</p>
          <p className="font-normal"> Bluetooth Smartwatch</p>
          <p className="font-normal">Sport Smartwatch</p>
          <p className="font-normal">Smartwatch Sports</p>
          <p className="font-normal"> Man Bracelet</p>
          <p className="font-normal">Waterproof Bracelet</p>
          <p className="font-normal">Fitbit Bracelet</p>
          <p className="font-normal"> Fitness Bracelet</p>
          <p className="font-normal">Fitbit Bracelet</p>
          <p className="font-normal">Touch Bracelet</p>
        </div>
      </div>

      {/* { right product body}  */}
      <div className="w-8/12 mt-4 ">
        <div className="ml-12 mt-4">
          <div className="flex">
            <div className="border-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <div className="pl-4 border-2 pr-4 flex">
              <p>Customer Electronics</p>
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="pl-4 border-2 pr-4 flex">
              <p>Smart Electronics</p>
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <div className="pl-4 border-2 pr-4 flex">
              <p>Smart Watches </p>
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          <div className=" flex justify-between  p-4 w-full h-16 mt-4 bg-yellow-200">
            <div className="flex">
              <div className="flex rounded-lg bg-yellow-400 pr-4 pl-2 pt-1">
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
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <p>Buying Guide</p>
              </div>
              <div>
                <p>Smart Watches Buying Guide</p>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* sorting and filtering div */}
          <div className="mt-8">
            <div className="flex">
              <div>Brand: </div>
              <div className="flex">
                <img
                  className="w-16 h-8 border-2 ml-2 mr-4"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UCNQKy0bALKNfQnfIW3JphY8xbh_QPOppQ&usqp=CAU"
                  alt="huawei"
                />
                <img
                  className="w-16 h-8 border-2 ml-1 mr-4"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTddNTwBlzDZxFRp1ikyE2wspgLefe9MqbYEw&usqp=CAU"
                  alt="x3"
                />
                <img
                  className="w-16 h-8 border-2 ml-1 mr-4"
                  src="https://uidesign.gbtcdn.com/GB/image/6874/150x73.jpg"
                  alt="xiomi"
                />
                <img
                  className="w-16 h-8 border-2 ml-1 mr-4"
                  src="https://uidesign.gbtcdn.com/GB/image/brand/20181102_5779/amazfit.jpg?impolicy=hight"
                  alt="amazefit"
                />
                <img
                  className="w-16 h-8 border-2 ml-1"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM8PCSHrC3ZkE8y6elnZuMTNqvnWQtnS1Zdg&usqp=CAU"
                  alt="apple"
                />
              </div>
            </div>
            <div className="flex mt-4">
              <p className="">Sort By: </p>
              <button className="bg-yellow-400 ml-2 p-2">Ascending</button>
              <button className="bg-yellow-400 ml-8 p-2">Decending</button>
            </div>
          </div>

          {/* {products to be  append watches } */}
          <div className="w-11/12 ml-4 mt-8 h-full">
        <div className="grid grid-cols-3 grid-rows-5  shadow-2xl">
          {watch.map((e) => {
            return (
              <div
                className="w-full m-2 h-80 border watchdiv"
                style={{ marginRight: "2px" }}
              >
                <div className=" mb-1">
                  <img className="h-48 w-full" src={e.image} />
                  <p className=" ml-2">{e.title}</p>
                  <p className="ml-4 text-pink-500 ">${e.price}</p>
                  <span className="ml-4 h-6 text-pink-700 pl-2 pr-2 ">
                    {e.flashSale}
                  </span>
                  <p className="">{e.shipFrom}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div> 
        </div>
      </div>
    </div>
  );
};
