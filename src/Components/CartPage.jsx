import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Link} from "react-router-dom"
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import {useDispatch,useSelector} from "react-redux"
import { GetWatchDataFromEnd } from './Redux/Action.js';
export const CartPage = () => {

    const userId=useSelector((state)=>state.gearbest.userId)
    const cartsdatas=useSelector((state)=>state.gearbest.cart1)
    const dispatch=useDispatch()
    console.log("cartsdatas",cartsdatas)
    console.log("cartpageuserId",userId)

    let total = cartsdatas.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.price;
    }, 0);
    console.log("total",total)

    const GetAllDataCart=()=>{
        dispatch(GetWatchDataFromEnd(userId))
  }
  useEffect(()=>{
    GetAllDataCart()
  },[])
  return (
    <div className="ml-16 mt-4">
        <div className="w-11/12 flex bg-gray-100">
            <div className="w-2/5 p-2 pl-4 ml-6">Selected Item(s)</div>
            <div className="w-1/6 p-2 pl-4 ml-6">Unit Price</div>
            <div className="w-1/6 p-2 pl-4 ml-6">Subtotal</div>
            <div className="w-1/6 p-2 pl-4 ml-6">Operation</div>
        </div>
        {cartsdatas.map((e)=>{
            return(
        <div className="w-full h-28 mt-4 flex bg-gray-100">
            <div className="w-3/5 p-2 flex pl-4">
                <img className="w-48 h-18 text-xs" src={e.image} alt="" />
                <p>{e.title}</p>
            </div>
            <div className="w-2/5 p-2 pt-8 pl-4 ml-60">
                <p>Price: ${e.price}</p>
                <p className="line-through">RRP:{e.price+Math.ceil(Math.random(1*200))}</p>
            </div>
            <div className="w-2/5 p-2 pl-4 pt-8 ml-6">
            <p>${e.price}</p>
            </div>
            <div className="w-2/5 p-2 pl-4 ml-6 mt-6 ">
              
                <button className="ml-20 bg-yellow-400 p-2  pl-4 pr-4 ">Delete</button>
            </div>
        </div>)})}
        <div className="ml-96 mt-4 flex">
        <div className="p-2 pr-4 bg-yellow-600 h-12 w-54">Total Price: ${total.toFixed(2)}</div>
           <Link to="/checkout"><button className="p-2 ml-96 pr-4 bg-yellow-600 h-12 w-32">CheckOut</button></Link>
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
  )
}