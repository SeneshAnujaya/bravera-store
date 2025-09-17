import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
// import { ReactTyped } from "react-typed";



const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row mt-[4.5rem] h-auto md:h-[600px] overflow-hidden">
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-[#f1ece9] px-6">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141] bg-[#b7a271]"></p>
            <p className="font-medium text-sm md:text-base text-primary-blue">TRENDING NOW</p>
          </div>
          <div>
          <h1 className="rafles text-3xl sm:py-3 lg:text-5xl leading-relaxed text-slate-900 font-bold">
            Elevate Your Wardrobe
            {/* <ReactTyped
          strings={[
            "Elevate Your Wardrobe",
            "Trendy Styles for You",
            "Shop Smart. Dress Better",
          ]}
          typeSpeed={90}
          backSpeed={90}
          loop
        /> */}
          </h1>
          </div>
          
          <div className="">
             <p className="w-lg">Bravera is your go-to online fashion destination, offering trendy, high-quality clothing at affordable prices. From casual wear to stylish outfits, we bring the latest looks straight to your wardrobe with fast delivery and easy shopping.</p>
             </div>
          <div className="flex items-center">
         
            {/* <p className="font-semibold text-sm md:text-base">SHOP NOW</p> */}
            {/* <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p> */}
            <div className="w-auto  mt-12 border">
              <Link to="/collection">
                <button
                  type="button"
                  className="bg-primary-blue text-[#b7a271] text-white px-10 py-3 text-sm  hover:bg-[#b7a271]"
                >
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Hero right side */}
      <img
        src={assets.heroNewImg}
        alt="hero-img"
        className="w-full h-[400px] sm:h-auto sm:w-1/2 object-cover object-top"
      />
    </div>
  );
};

export default Hero;
