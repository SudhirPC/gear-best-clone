import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import axios from "axios";

export const FrontPage = () => {
  const [electronics, setSElectronics] = useState(false);
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://gear-best-by-sudhir.herokuapp.com/frontpage")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleToggle = () => {
    if (electronics) {
      setSElectronics(false);
    } else {
      setSElectronics(true);
    }

    console.log(electronics);
  };
  return (
    <div>
      <div className="mainbodyupper">
        <div className="leftuppermain">
          <Link to="/productpage">
            <div className=" pl-4 hover:bg-gray-100">Smart Watches</div>
          </Link>
          <div className=" pl-4 hover:bg-gray-100">Consumer Electronics</div>
          <div className=" pl-4 hover:bg-gray-100">Industrial & Scientific</div>
          <div className=" pl-4 hover:bg-gray-100">
            Cell Phones & Accessories
          </div>
          <div className=" pl-4 hover:bg-gray-100">Appliances</div>
          <div className=" pl-4 hover:bg-gray-100">
            Outdoors, Fitness & Sports
          </div>
          <div className=" pl-4 hover:bg-gray-100">
            Computers, Tablets & Office
          </div>
          <div className=" pl-4 hover:bg-gray-100">Health & Personal Care</div>
          <div className=" pl-4 hover:bg-gray-100">
            Home Improvement & Tools
          </div>
          <div className=" pl-4 hover:bg-gray-100">Drones, Toys & Hobbies</div>
          <div className=" pl-4 hover:bg-gray-100">Home & Garden</div>
          <div className=" pl-4 hover:bg-gray-100">Motor & Car Electronics</div>
          <div className=" pl-4 hover:bg-gray-100">Men's Fashion</div>
          <div className=" pl-4 hover:bg-gray-100">Watches & Jewelry</div>
          <div className=" pl-4 hover:bg-gray-100">Gearbest Promotion</div>
        </div>

        <div className="swiperdivmain1">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
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
                    src="https://uidesign.gbtcdn.com/GB/image/8823/1190X420-en1.jpg"
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
                    src="https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg"
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
                    src="https://uidesign.gbtcdn.com/GB/image/8823/Father1190X420en.jpg?imbypass=true"
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
                    src="https://uidesign.gbtcdn.com/GB/image/9534/Smart+Watches+PC+1190X420+EN.jpg"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex ml-16 mt-4">
        <div>
          <img
            className="w-56 h-28 mr-1"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-56 h-28 mr-1"
            src="https://uidesign.gbtcdn.com/GB/image/8823/L900-230X120-en.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-56 h-28 mr-1"
            src="https://uidesign.gbtcdn.com/GB/image/8823/C230X120-en.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-56 h-28 mr-1"
            src="https://uidesign.gbtcdn.com/GB/image/7257/230_120_en.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-56 h-28"
            src="https://uidesign.gbtcdn.com/GB/image/6874/230x120b_en.jpg"
            alt=""
          />
        </div>
      </div>

      {/* collection images */}

      <div className=" ml-16 mt-10 mb-4">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="text-2xl font-bold">COLLECTION</h1>
        </div>
        <div className="flex">
          <div className="shadow-2xl ">
            <img
              className="w-44 h-56 mr-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr5sVzgmpIQzputdBh7qkifvPDrzTCASHECA&usqp=CAU"
              alt=""
            />
          </div>
          <div className="shadow-2xl">
            <img
              className="w-44 h-56 mr-4"
              src="https://gloimg.gbtcdn.com/soa/gb/store/6507287161137004544/16430/goods_thumb_220-v3/e7514f266988.jpg"
              alt=""
            />
          </div>
          <div className="shadow-2xl">
            <img
              className="w-44 h-56 mr-4"
              src="https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16519/goods_thumb_220-v1/e9c161b9300d.jpg"
              alt=""
            />
          </div>
          <div className="shadow-2xl">
            <img
              className="w-44 h-56 mr-4"
              src="https://gloimg.gbtcdn.com/soa/gb/item/6900746726869757952/16492/goods_thumb_220-v3/0331f75f74f0.jpg"
              alt=""
            />
          </div>
          <div className="shadow-2xl">
            <img
              className="w-44 h-56 mr-4"
              src="https://gloimg.gbtcdn.com/soa/gb/item/6878399324569661440/16517/goods_thumb_220-v1/a00cb9f65d8f.jpg"
              alt=""
            />
          </div>
          <div className="shadow-2xl">
            <img
              className="w-44 h-56"
              src="https://gloimg.gbtcdn.com/soa/gb/item/6899292126182567936/16463/goods_thumb_220-v1/fa2088fa6aaa.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* super deals images */}

      <div className=" ml-16 mt-10 mb-8">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mt-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-2xl font-bold">SUPER DEALS</h1>
        </div>
        <div className="flex mt-4">
          <div className="shadow-2xl w-44 mr-4">
            <img
              className="w-44 h-full mr-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFCTiS5QTWY181AmAXofxlHop3DL4aXWXwPQ&usqp=CAU"
              alt=""
            />
          </div>
          <div className="shadow-2xl w-44 mr-4 p-2">
            <img
              className="w-44 h-56 mr-4"
              src="https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16538/goods_thumb_220-v1/1d662f23ff41.jpg"
              alt=""
            />
            <p>Samebike LO26 Smart Folding 26 Inch Electric...</p>
            <p className="line-through">RRP:1399</p>
            <p className="text-pink-700">$ 899.00</p>
          </div>
          <div className="shadow-2xl mr-4 w-44 p-2">
            <img
              className="w-44 h-56 mr-4"
              src="https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_thumb_220-v5/6233d35f6f8a.jpg"
              alt=""
            />
            <p>Global Version MI 11 Ultra 6.3 inch Smart phone 12Gb Cell...</p>
            <p className="line-through">RRP:1399</p>
            <p className="text-pink-700">$ 899.00</p>
          </div>
          <div className="shadow-2xl w-44 mr-4 p-2">
            <img
              className="w-44 h-56 mr-4"
              src="https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16424/goods_thumb_220-v1/186cd6966d5f.jpg"
              alt=""
            />
            <p>Xiaomi Mi Intelligent Remote Control Car SUZUKI JIMNY 4...</p>
            <p className="line-through">RRP:62.94</p>
            <p className="text-pink-700">$ 51.99</p>
          </div>
          <div className="shadow-2xl w-44 mr-4 p-2">
            <img
              className="w-44 h-56 mr-4"
              src="https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16486/goods_img_big-v1/6a0fbd723c9d.jpg"
              alt=""
            />
            <p>Xiaomi Redmi AX5400 Router 16M RGB WiFi6 512M Mem...</p>
            <p className="line-through">RRP:145.88</p>
            <p className="text-pink-700">$ 134.99</p>
          </div>
          <div className="shadow-2xl w-44 mr-4 p-2">
            <img
              className="w-44 h-56"
              src="https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16459/goods_img_big-v1/f88842132727.jpg"
              alt=""
            />
            <p>Xiaomi Redmi AX5400 Router 16M RGB WiFi6 512M Mem...</p>
            <p className="line-through">RRP:499.99</p>
            <p className="text-pink-700">$ 177.00</p>
          </div>
        </div>
      </div>

      {/* new images div swiper */}
      <div className="ml-16">
        <div className="flex mt-16 mb-2 ml-4">
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
              d="M12 4v16m8-8H4"
            />
          </svg>
          <p className="font-bold text-xl ">NEW</p>
        </div>
        <div>
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
      </div>

      {/* Recommended image append */}
      <div className="flex mt-16 mb-4 ml-16">
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
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
        <p className="font-bold text-xl ml-2">RECOMMENDED FOR YOU</p>
      </div>

      <div className="w-11/12 ml-16 h-full">
        <div className="grid grid-cols-5 grid-rows-6 shadow-2xl">
          {data.map((e) => {
            return (
              <div
                className="w-full h-80 border-2  recommendOne"
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
  );
};
{
  /* <div className={electronics ? "block" : "hidden"}>
<div className="w-2/3">
  <div className="flex mt-4">
    <div>
      <p className="text-xl font-semibold">Smart Electronics</p>
      <p>Smart Watches</p>
      <p>Smart Watche Phone</p>
      <p>Smart Wristband</p>
      <p>Smart Accessories</p>
      <p>Sport Watch</p>
      <p>Smart Health Watch</p>
    </div>
    <div>
    <p className="text-xl font-semibold">Headphones & Electronics</p>
      <p>Bluetooth Headphones </p>
      <p>Earbud Headphones</p>
      <p>Gaming  Headphones</p>
      <p>On-Ear & Over-Ear Headphones</p>
      <p>Sport & Fitness Headphones</p>
      <p>Headphones Accessories </p>
    </div>
    <div>
    <p className="text-xl font-semibold">Hot Brands</p>
     <p>Kospet</p>
     <p>Lenovo</p>
     <p>CORN</p>
     <p>KZ</p>
     <p>TicWatch</p>
     <p>Gocomma</p>
    </div>
  </div>
  <div className="flex mt-8">
  <div>
      <p className="text-xl font-semibold">Security & Protection</p>
      <p>Access Control </p>
      <p>Alarm Systems</p>
      <p>Door Interncom</p>
      <p>IP Cameras</p>
      <p>Smart Doorbells</p>
      <p>Surveillance Camera Systems</p>
    </div>
    <div>
    <p className="text-xl font-semibold">Xiomi Ecosystem Products</p>
      <p>Xiomi</p>
      <p>Amazefit</p>
      <p>Huawei</p>
      <p>Apple</p>
      <p>Aqara</p>
      <p>QCY</p>
    </div>
    <div>
    <p className="text-xl font-semibold">Other Customer Electronics</p>
     <p>Smart Home</p>
     <p>Action Cameras & DV Accessories</p>
     <p>Gimbal</p>
     <p>Video Games</p>
     <p>Speakers</p>
     <p>Microphone</p>
    </div>
  </div>
</div>
</div> */
}
