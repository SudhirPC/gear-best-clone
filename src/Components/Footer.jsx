import React from "react";

export const Footer = () => {
  return (
    //---------------------------- upper footer div---------------
    <div className="m-auto mt-4 ">
      <div className="flex w-11/12 ml-8 pt-8 bg-white shadow ">
        <div className="w-1/5 ml-8 mr-10">
          <img src="https://css.gbtcdn.com/imagecache/gbw/img/site/new-logo.png" />
          <h4 style={{ marginTop: "10px", marginLeft: "15px" }}>
            AFFORTABLE QUALITY FUN SHOPPING
          </h4>
        </div>
        <div className="w-1/5 mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-20 ml-14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
          <h4 className="ml-5 footerh4">High Quality Selection</h4>
          <p className="mt: -15px, text-gray-500 , ml-5">
            Total product quality control for peace of mind
          </p>
        </div>
        <div className="w-2/12 mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-20 ml-14 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          <h4 className="ml-5 footerh4"> Affordable Prices</h4>
          <p className="mt: -15px, text-gray-500 ml-5">
            Factory direct prices for maximum savings
          </p>
        </div>
        <div className="w-2/12 mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-20 ml-14 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </svg>
          <h4 className="ml-5 footerh4">Express Shipping</h4>
          <p className="mt: -15px, text-gray-500 ml-5">
            Fast, reliable delivery from global warehouses
          </p>
        </div>
        <div className="w-2/12 mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-20 ml-14"
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
          <h4 className="ml-5 footerh4">Worry-free After-sales</h4>
          <p className="mt: -15px, text-gray-500 ml-5 ">
            Instant access to professional support
          </p>
        </div>
      </div>

      {/* //---------------------------- middle footer div--------------- */}
      <div className="m-auto "></div>
      <div className="flex w-full mt-4 ml-16">
        <div className="flex w-1/2 mt-12">
          <h1>Newsletter</h1>
          <input
            type="text"
            className="w-64 h-8 ml-2 border border-black"
            placeholder="Enter Email to get extra 50 Points"
          />
          <button className="bg-black text-white h-8">SUBSCRIBE</button>
        </div>
        {/* // ----------icon div------ */}

        <div className="flex justify-center mt-12 ml-20 mb-6">
          <a
            href="#!"
            type="button"
            className="rounded-full border-2  border-white  leading-normal uppercase   focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1  facebook"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              className="w-2 h-full mx-auto text-black   facebook-svg"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              ></path>
            </svg>
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white  leading-normal uppercase  focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1 twitter"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              className="w-3 h-full mx-auto twitter-svg"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              ></path>
            </svg>
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white leading-normal uppercase focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1 google"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              className="w-3 h-full mx-auto google-svg"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white  leading-normal uppercase   focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1 instagram"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              className="w-3 h-full mx-auto instagram-svg"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white  leading-normal uppercase  hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1 linkedin"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin-in"
              className="w-3 h-full mx-auto linkedin-svg"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              ></path>
            </svg>
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white leading-normal uppercase  focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1 facebook"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              className="w-3 h-full mx-auto facebook-svg"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      {/* -----------------information footer */}
      <div className="flex text-gray-500 ">
        <div className=" ml-16 text-sm ">
          <h1 className="text-xl text-black">Company Information</h1>
          <p className="hover:cursor-pointer hover:underline">About Us</p>
          <p className="hover:cursor-pointer hover:underline">Top Searches</p>
          <p className="hover:cursor-pointer hover:underline">Privacy Policy</p>
          <p className="hover:cursor-pointer hover:underline">
            Terms and Conditions
          </p>
          <p className="hover:cursor-pointer hover:underline">
            Intellectual Property Policy
          </p>
          <p className="hover:cursor-pointer hover:underline">Testimonials</p>
          <p className="hover:cursor-pointer hover:underline">Contact Us</p>
          <p className="hover:cursor-pointer hover:underline">
            {" "}
            Sell on Gearbest{" "}
          </p>
          <p className="hover:cursor-pointer hover:underline">Cookies Policy</p>
          <p className="hover:cursor-pointer hover:underline">Top Brands</p>
          <p className="hover:cursor-pointer hover:underline">
            Gearbest Official Blog
          </p>
        </div>
        <div className="ml-32 text-sm ">
          <h1 className="text-xl text-black"> Customer Service</h1>
          <p className="hover:cursor-pointer hover:underline">
            Shipping Information
          </p>
          <p className="hover:cursor-pointer hover:underline">My Favorites</p>
          <p className="hover:cursor-pointer hover:underline">
            FAQ For Newsletter Subscription
          </p>
          <p className="hover:cursor-pointer hover:underline">My Points</p>
          <p className="hover:cursor-pointer hover:underline">
            Warranty and Return
          </p>
          <p className="hover:cursor-pointer hover:underline">
            Payment Methods
          </p>
          <p className="hover:cursor-pointer hover:underline">
            Deposit Expansion
          </p>
          <p className="hover:cursor-pointer hover:underline">FAQ & Support </p>
          <p className="hover:cursor-pointer hover:underline">Sitemap</p>
          <p className="hover:cursor-pointer hover:underline">
            Gearbest Wallet Instruction
          </p>
          <p className="hover:cursor-pointer hover:underline">
            FAQs about COVID-19
          </p>
        </div>
        <div className=" ml-32 text-sm ">
          <h1 className="text-xl text-black">Other Business</h1>
          <p className="hover:cursor-pointer hover:underline">
            Partnership Programs
          </p>
          <p className="hover:cursor-pointer hover:underline">
            Associate Program
          </p>
        </div>
        <div className="ml-32 text-sm hover:cursor-pointer hover:underline">
          <h1 className="text-xl text-black">Download App!</h1>
          <p>Save $3 with App & New User Only</p>
          <div className="flex">
            <div>
              <img
                className="h-20 w-35 ml-2"
                src="https://media.istockphoto.com/photos/close-up-of-qr-code-example-picture-id518484289?s=612x612"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-20 w-35 ml-2"
                src="https://thumbs.dreamstime.com/b/app-store-155321652.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex ml-32  companylogo">
          <img
            src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/money.png"
            alt=""
          />
          <img
            src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/m.png"
            alt=""
          />
          <img
            src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/rese.png"
            alt=""
          />
          <img
            src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/paypal.png"
            alt=""
          />
          <img
            src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/visa.png"
            alt=""
          />
          <img
            src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ww.png"
            alt=""
          />
          <img
            src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/d.png"
            alt=""
          />
          <img
            src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/oxxo.png"
            alt=""
          />
          <img
            src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/dic.png"
            alt=""
          />
          <img
            src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/jcb.png"
            alt=""
          />
          <img
            src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/paypal.png"
            alt=""
          />
          <img
            src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/oxxo.png"
            alt=""
          />
        </div>
        <div className="flex ml-96 mt-2 companylogo">
          <img
            src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/bo.png"
            alt=""
          />
          <img
            src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/postepay.png"
            alt=""
          />
          <img
            src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/giropay.png"
            alt=""
          />
          <img
            src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/sofort.png"
            alt=""
          />
          <img
            src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/eps.png"
            alt=""
          />
          <img
            src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/pago.png"
            alt=""
          />
          <img
            src="https://uidesign.gbtcdn.com/GB/image/others/20190222_7819/m-Logo.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-full h-12 text-center mt-4 p-2  bg-black text-white">
        <p>Copyright © 2014-2022 Gearbest.com. All Rights Reserved.</p>
      </div>
    </div>
  );
};
