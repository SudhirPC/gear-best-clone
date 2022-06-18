import React, { useEffect, useState } from "react";
import axios from "axios"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Link} from "react-router-dom"
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export const ProductPage = () => {
    const [watch, setWatch] = useState([]);
    const [price,setPrice]=useState("")
    const [brand,setBrand]=useState("")
    const [gender,setGender]=useState("")

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

  const getWatchPrice=(price)=>{
    axios
      .get(`http://localhost:3750/watch/sort/${price}`)
      .then((res) => {
        console.log(res.data);
        setWatch(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getWatchPrice(price);
  }, [price]);


  useEffect(() => {
    getWatchBrand(brand);
  }, [brand]);
 const getWatchBrand=(brand)=>{

    axios
      .get(`http://localhost:3750/watch/filter/brand/${brand}`)
      .then((res) => {
        console.log("brandwise",res.data);
        setWatch(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getWatchGender=(gender)=>{
    axios
      .get(`http://localhost:3750/watch/filter/gender/${gender}`)
      .then((res) => {
        console.log("gender",res.data);
        setWatch(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getWatchGender(gender);
  }, [gender]);

// console.log("brand",brand)
  // console.log("watch", watch)
  return (
    <div className="ml-16">
    <div className="flex">
      {/* left side baar  */}
      <div className="w-3/12 ml-4 pl-4 mt-4 font-bold overflow-scroll">
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
        <div className="mt-4 ml-2 mb-4  cursor-pointer ">
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
                <img onClick={()=>{setBrand("huawei")}}
                  className="w-16 h-8 border-2 cursor-pointer ml-2 mr-4"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UCNQKy0bALKNfQnfIW3JphY8xbh_QPOppQ&usqp=CAU"
                  alt="huawei"
                />
                <img onClick={()=>{setBrand("x3")}}
                  className="w-16 h-8 cursor-pointer border-2 ml-1 mr-4"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTddNTwBlzDZxFRp1ikyE2wspgLefe9MqbYEw&usqp=CAU"
                  alt="x3"
                />
                <img onClick={()=>{setBrand("xiomi")}}
                  className="w-16 h-8 border-2 cursor-pointer ml-1 mr-4"
                  src="https://uidesign.gbtcdn.com/GB/image/6874/150x73.jpg"
                  alt="xiomi"
                />
                <img onClick={()=>{setBrand("Amazfit")}}
                  className="w-16 h-8 border-2 cursor-pointer ml-1 mr-4"
                  src="https://uidesign.gbtcdn.com/GB/image/brand/20181102_5779/amazfit.jpg?impolicy=hight"
                  alt="amazefit"
                />
                <img onClick={()=>{setBrand("apple")}}
                  className="w-16 h-8 border-2 cursor-pointer ml-1"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM8PCSHrC3ZkE8y6elnZuMTNqvnWQtnS1Zdg&usqp=CAU"
                  alt="apple"
                />
              </div>
            </div>
            <div className="flex mt-4">
              <p className="">Sort By: </p>
              <button onClick={()=>{setPrice("asc")}} className="bg-yellow-400 ml-2 p-2">Ascending</button>
              <button onClick={()=>{setPrice("desc")}} className="bg-yellow-400 ml-8 p-2">Decending</button>
            
            <button onClick={()=>{setGender("male")}}>Male</button>
            <button onClick={()=>{setGender("female")}}>Female</button>
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
                  <div className="bg-yellow-500 w-32 ml-2">{e.gender} Watch</div>
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
    <div className="swiperdivmain">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className=" col ">
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://gloimg.gbtcdn.com/soa/gb/item/6866331933228593152/16418/goods_img-v1/42f52c167490.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col">
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://gloimg.gbtcdn.com/soa/gb/item/6882688590640508928/16508/goods_img-v1/83e81faaf67b.jpg"
                    alt=""
                  />
                </div>
              </div>
              
           
            </SwiperSlide>
            <SwiperSlide>
              <div className="col">
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://gloimg.gbtcdn.com/soa/gb/item/6878028664286670848/16501/goods_thumb_220-v1/3f611e27287f.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col">
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16516/goods_img-v3/ce8cec017eca.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col">
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16204/goods_img-v1/95b7727db8f7.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col">
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16388/goods_img-v2/9b1ec073177c.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col">
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://gloimg.gbtcdn.com/soa/gb/item/6905960412823613440/16538/goods_img-v5/cb7d91b7d1ad.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col">
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://gloimg.gbtcdn.com/soa/gb/item/6908377430696849408/16520/goods_img-v1/80f756912371.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col">
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="https://gloimg.gbtcdn.com/soa/gb/item/6907015762637156352/16509/goods_img-v3/64a2a64125fd.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          
        </div> 
    </div>
  );
};
