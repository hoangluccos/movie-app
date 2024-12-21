import React from "react";
import ImgPoster from "../assets/nghe-noi-em-thich-toi.png";
import ImgPlay from "../assets/play-button.png";
function Banner() {
  return (
    <div className="w-full bg-banner h-[700px] bg-no-repeat bg-cover relative p-5 mt-[56px]">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-[30%]" />
      <div className="content flex p-[36px] justify-center space-x-[86px] relative z-20">
        <div className="info w-[50%]">
          {/* items-baseline */}
          <p className="py-2 px-4 bg-gradient-to-r from-red-500 to-white inline-block">
            TV Show
          </p>
          <h2 className="mt-3 text-white text-[48px] font-bold">
            Nghe nói em thích tôi
          </h2>
          <div className="text-[36px]">
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star-half-stroke text-yellow-400"></i>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ad
            natus ipsum assumenda nulla, deleniti tempora ipsam voluptate
            obcaecati totam veritatis autem debitis dolorum maiores temporibus
            quod aut rem soluta laborum repudiandae eligendi recusandae,
            officiis vitae dicta? Animi, amet quae, magnam porro, ad maiores eos
            perferendis omnis quibusdam molestiae tempore pariatur blanditiis
            cum doloremque repellat eligendi inventore beatae nulla alias.
          </p>
          <div className="flex space-x-3 mt-3">
            <button className="bg-black text-white p-2 font-bold">
              Chi tiết
            </button>
            <button className="bg-red-700 text-white p-2 font-bold">
              Xem phim
            </button>
          </div>
        </div>
        <div className="img w-[50%] h-[400px] relative group cursor-pointer">
          <img
            src={ImgPoster}
            alt=""
            className="object-contain w-full h-full "
          />
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-90 transition-opacity duration-500 ease-out">
            <img src={ImgPlay} alt="" className="w-16 h-16" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
