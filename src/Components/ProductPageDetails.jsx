import React from "react";

export const ProductPage = () => {
  return (
    <div className="ml-16">
      <div className="flex "> 
      <div className="w-96  m-4 mr-10 p-10 border-2 border-text-gray-500">
        <img className="w-80 h-56 mr-1"src="https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15972/goods_img_big-v3/a32db8320130.jpg" alt="" />
      </div>
      <div>
      <div className="  ml-10 mr-10 p-10">
        <p className="text-3xl">
          HUAWEI WATCH GT Elegant Edition Smart Sport Watch 1.39 inch AMOLED
          Colorful Screen Heartrate GPS Swimming Jogging Cycling SleepWatch -
          Elegant White
        </p>
        <div className="flex mt-4">
      <div>Price :</div>
      <div className="text-red-700 font-semibold text-xl"> $ 99.79</div>
        </div>
        <div className="flex mt-4">
          <div className="text-l">Shipping : </div>
          <div className="text-xl  flex"> Ship between: <p className="text-xl text-red-700 font-semibold">Jun 20 - Jun 24,</p> Estimated Shipping Time: <p className="text-xl text-red-700 font-semibold">15-45 days</p></div>
        </div>
      </div> 
      <div className="flex">
        <button className="bg-red-500 p-4 ml-24 mr-4">Add To Cart</button>
        <button className="bg-red-200 p-4  mr-4 border-2 border-red-500">Buy Now</button>
      </div>
      </div>
      </div>



      {/* icon-div and companylogo payment  on product details page*/}
      <div className="flex">
      <div className="flex mt-4  mb-6">
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


        {/* logo payment company div */}
        <div className="flex  mt-4 ml-16">
          <div className="mr-4">
            <img src="https://css.gbtcdn.com/imagecache/gbw/img/site/paypal@.png" alt="" />
          </div>

          <div className="mr-4">
            <img src="https://uidesign.gbtcdn.com/GB/images/others/GB_brandpic/mm/VISA.png?imbypass=true" alt="" />
          </div>

          <div className="mr-4">
            <img className="w-24 h-14 -m-2" src="https://uidesign.gbtcdn.com/GB/images/others/GB_brandpic/mm/mc_vrt_opt_pos_73_2x.png?imbypass=true" alt="" />
          </div>
        <div className="flex mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path stroke-linecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
        </svg>
        <p>Tax Info</p>
        </div>
        <div className="flex mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path stroke-linecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
          <p>Price Protection</p>
        </div>
        <div className="flex mr-4 ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path stroke-linecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p>Price Disclaimer</p>
        </div>

        <div className="flex mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path stroke-linecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        <p>Report Items</p>
        </div>
        </div>
        </div>

        {/* RECOMMEND DIV IMAGES IN A SLIDER */}
        <div></div>

        {/* DECRIPTION OF A PRODUCTS */}
        <div className="mt-16">
          <div className="flex bg-gray-300 w-11/12">
            <button className="pl-4 pr-4 bg-yellow-300">Decription</button>
            <button className="pl-4 pr-4 hover:bg-yellow-300">Review</button>
          </div>
          <div className="w-10/12 ml-28 mt-2 text-xl">
          <h1>Decription</h1> 
        <div className="w-10/12 ml-8 mt-4  mb-8">
        <h1 className="text-2xl text-black">Main Features</h1>
        <hr/>
        <p className="mt-4">Slim. Beautiful. Strong.</p>
        <p>Featuring a double crown AMOLED screen and lightweight design, this watch is classy and sleek. Pair that with a ceramic bezel design and stainless steel shell, you're ready to explore.</p>
        <p className="mt-4">Style for Your Life</p>
        <p>A wide selection of watch straps of different colours and materials style your every look and mood. The QuickFit straps let you quickly and easily change it without any tools.</p>
        <p className="mt-4">Long Battery Life, Travel without Limits</p>
        <p>HUAWEI WATCH GT provides a long battery life* to keep up with wherever you go.</p>
        <p className="mt-4">Real-time Heartrate Monitoring</p>
        <p>HUAWEI TruSeen™ 3.0 heartrate monitoring technology provides a more efficient and accurate real-time personal measurement of your heartrate by using a self-learning algorithm and innovative sensors.</p>
        <p className="mt-4">3 Satellites and 1 Precise Location</p>
        <p>HUAWEI WATCH GT supports 3 Satellite Positioning Systems (GPS, GLONASS, GALILEO) worldwide to offer more accurate, faster and precise positioning.</p>
        <p className="mt-4">Scientific Coaching</p>
        <p>Stay Fit with the HUAWEI WATCH GT that provides coaching in introductory to advanced running courses to assist you in real-time while also providing guidance training and giving time-movement effect feedback.</p>
        <p className="mt-4">Always Ready</p>
        <p>Multiple sports modes for many outdoor, indoor and training activities, the HUAWEI WATCH GT is ready to Make It Possible.</p>
        

        {/* specification  of products*/}

        <div>
          <img src="https://des.gbtcdn.com/storage/desc/6615272824267153408/15972/f637591be6ec.jpg" alt="" />
          <img src="https://des.gbtcdn.com/storage/desc/6615272824267153408/15972/06f5178a7c61.jpg" alt="" />
          <img src="https://des.gbtcdn.com/storage/desc/6615272824267153408/15972/6e07a5f3d5f6.jpg" alt="" />
          <img src="https://des.gbtcdn.com/storage/desc/6615272824267153408/15972/d889d2631bff.jpg" alt="" />
          <img src="https://des.gbtcdn.com/storage/desc/6615272824267153408/15972/b6f84d33b031.jpg" alt="" />
          <img src="https://des.gbtcdn.com/storage/desc/6615272824267153408/15972/88a6de09aa42.jpg" alt="" />
          <img src="https://des.gbtcdn.com/storage/desc/6615272824267153408/15972/9528bb87ba92.jpg" alt="" />
        </div>
          </div>
          </div>
       
        </div>
    </div>
  );
};
