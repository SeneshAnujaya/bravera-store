import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { assets } from "../assets/assets";
import backgroundTwo from "../assets/backgroundTwo.jpg";
import backgroundThree from '../assets/backgroundThree.jpg';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Welcome to Bravera",
      subtitle: "Trendy Styles, Just for You",
      description:
        "Bravera is your go-to online fashion destination, offering trendy, high-quality clothing at affordable prices. From casual wear to stylish outfits, we bring the latest looks straight to your wardrobe with fast delivery and easy shopping.",
      img: assets.heroNewImg,
    },
    {
      id: 2,
      title: "Shop Smart. Dress Better",
      subtitle: "Affordable & High Quality",
      description:
        "Bravera is your go-to online fashion destination, offering trendy, high-quality clothing at affordable prices. From casual wear to stylish outfits, we bring the latest looks straight to your wardrobe with fast delivery and easy shopping.",
      img: backgroundTwo,
    },
    {
      id: 3,
      title: "Luxury. Style. You",
      subtitle: "Discover the Latest Trends",
      description:
        "Bravera is your go-to online fashion destination, offering trendy, high-quality clothing at affordable prices. From casual wear to stylish outfits, we bring the latest looks straight to your wardrobe with fast delivery and easy shopping.",
      img: backgroundThree,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  };
   const fadeInUp = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      effect="fade"
      autoplay={ {delay: 3000,
    disableOnInteraction: false}}
      loop
      pagination={false}
      navigation={false}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      speed={1500}
      className="w-full"
    >
        
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <div className="flex flex-col sm:flex-row mt-[5.3rem] h-auto md:h-[calc(100vh-85.7px)] min-h-[600px] overflow-hidden">
            {/* Hero left side */}
            <div className={`w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0  px-6 ${slide.id == 2 ? 'bg-[#dee5dd]': slide.id == 3 ? 'bg-[#f9fcf5]' :'bg-[#f1ece9]'}`}>
              <div className="text-[#414141] w-full md:w-lg">
                {/* Subtitle line + text */}
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    key={`line-${slide.id}`}
                    variants={fadeInUp}
                    initial="hidden"
                    animate={index === activeIndex ? "visible" : "hidden"}
                    transition={{ duration: 0.7, delay: 0.1  }}
                    className="w-8 md:w-11 h-[2px] bg-[#b7a271]"
                  />
                  <motion.p
                    key={`subtitle-${slide.id}`}
                    variants={fadeInUp}
                    initial="hidden"
                    animate={index === activeIndex ? "visible" : "hidden"}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="font-medium text-sm md:text-base text-primary-blue"
                  >
                    {slide.subtitle}
                  </motion.p>
                </div>

                {/* Title */}
                <motion.h1
                  key={`title-${slide.id}`}
                  variants={fadeInLeft}
                  initial="hidden"
                  animate={index === activeIndex ? "visible" : "hidden"}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="rafles text-3xl sm:py-3 lg:text-5xl leading-relaxed text-slate-900 font-bold"
                >
                  {slide.title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  key={`description-${slide.id}`}
                  variants={fadeInLeft}
                  initial="hidden"
                  animate={index === activeIndex ? "visible" : "hidden"}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-4"
                >
                  {slide.description}
                </motion.p>

                {/* Button */}
                <motion.div
                  key={`button-${slide.id}`}
                  variants={fadeInLeft}
                  initial="hidden"
                  animate={index === activeIndex ? "visible" : "hidden"}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="w-auto mt-12"
                >
                  <Link to="/collection">
                    <button className="bg-primary-blue text-[#b7a271] text-white px-10 py-3 text-sm hover:bg-[#b7a271]">
                      SHOP NOW
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Hero right side image */}
            <motion.img
              key={`img-${slide.id}`}
              src={slide.img}
              alt="hero-img"
              className="w-full h-[400px] sm:h-auto sm:w-1/2 object-cover object-top"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              initial="hidden"
              animate={index === activeIndex ? "visible" : "hidden"}
              transition={{ duration: 1 }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
