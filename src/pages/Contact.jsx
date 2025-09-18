import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div className="sm:px-[5vw] md:px-[7vw] lg:px-[9vw] p-4">
      <div className="text-center text-2xl pt-10 mt-[4.5rem] ">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 w-full lg:w-4/5 mx-auto flex flex-col justify-center md:flex-row gap-10 md:gap-16 mb-20">
        <div className=" flex-1">
          <img
            className="w-full h-[400px] object-cover  md:w-[580px] rounded-md"
            src={assets.contactPageImg}
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col justify-center items-start gap-6">
          <p className="font-medium text-xl text-gray-800">Our Store</p>
          <p className="text-gray-500 font-light">
            Bravera, No. 12, Lotus Street, <br /> Colombo 07, Sri Lanka
          </p>
          <p className="text-gray-500 font-light">
            Tel: +94 77 1234567 <br /> Email: support@bravera.lk
          </p>
          <p className="font-medium text-xl text-gray-800">
            Careers at Bravera
          </p>
          <p className="text-gray-500 md:w-3/4 font-light text-sm">
            Be part of Bravera’s journey in redefining women’s fashion. Explore
            opportunities in design, e-commerce, marketing, and customer
            experience — and grow with a brand that empowers women through
            style.
          </p>
          <button className="border bg-primary-blue text-white px-6 py-3 text-sm hover:bg-gold hover:text-white transition-all duration-500">
            Explore Careers
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
