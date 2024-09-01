import React from "react";
import Slider from "react-slick";
import a1 from "../../images/a1.jpg";
import a3 from "../../images/a3.jpg";

const SliderComp = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-3 ">
          <div className="w-2/3 p-3">
            <div className="text-4xl font-bold">En kaliteli ayakkabılar burada</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, laudantium.
            </div>
            <div className=" border-4 my-2 hover:bg-red-200 rounded-full cursor-pointer text-2xl w-[200px] h-16 flex justify-center items-center ">
              İncele
            </div>
          </div>
          <img className="w-1/3" src={a1} alt="" />
        </div>

        <div className="!flex items-center bg-gray-100 px-3 ">
          <div className="w-2/3 p-3">
            <div className="text-4xl font-bold">En kaliteli ayakkabılar burada</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, laudantium.
            </div>
            <div className=" border-4 my-2 hover:bg-red-200 rounded-full cursor-pointer text-2xl w-[200px] h-16 flex justify-center items-center ">
              İncele
            </div>
          </div>
          <img className="w-1/3" src={a3} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
