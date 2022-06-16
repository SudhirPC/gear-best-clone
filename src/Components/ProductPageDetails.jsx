import React from "react";

export const ProductPage = () => {
  return (
    <div className="ml-16">
      <div className="flex "> 
      <div className="w-96  m-4 mr-10 p-10 border-2 border-text-gray-500">
        <img className="w-72 h-56 mr-1"src="https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15972/goods_img_big-v3/a32db8320130.jpg" alt="" />
      </div>
      <div className="w-   ml-10 mr-10 p-10">
        <p className="text-3xl">
          HUAWEI WATCH GT Elegant Edition Smart Sport Watch 1.39 inch AMOLED
          Colorful Screen Heartrate GPS Swimming Jogging Cycling SleepWatch -
          Elegant White
        </p>
        <div className="flex">
        <h5 className="text-3xl flex-row">Price:<p className="text-xl">99.79</p></h5>
        </div>
        <div>
        <h5 className="text-3xl">Shipping : <p className="text-xl"> Ship between: Jun 20 - Jun 24, Estimated Shipping Time: 15-45 business days</p></h5>
        </div>
      </div>
      </div>
    </div>
  );
};
