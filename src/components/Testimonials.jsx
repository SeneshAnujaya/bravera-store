import React from "react";
import Title from "./Title";
import testimonialOne from "../assets/backgroundTwo.jpg";
import testimonialTwo from "../assets/backgroundThree.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      image: testimonialOne, // replace with actual image
      text: "Bravera offers amazing clothes! The quality and style are unmatched, and every piece I’ve bought has become a favorite in my wardrobe.",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: testimonialTwo,
      text: "Fast delivery and trendy fashion! The shopping experience was seamless, and I always get compliments whenever I wear Bravera outfits.",
    },
    //   {
    //     id: 3,
    //     name: "Mike Johnson",
    //     // image: assets.user3,
    //     text: "Excellent service and great products. I love Bravera!",
    //   },
    //   {
    //     id: 4,
    //     name: "Emily Brown",
    //     // image: assets.user4,
    //     text: "Beautiful designs at affordable prices. Shopping was seamless.",
    //   },
  ];

  return (
    <div className="my-10 ">
      <div className="text-center py-8 text-3xl">
        <Title text1={"CUSTOMER"} text2={"SAY"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          See what our happy customers are saying about us
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {testimonials.map((testimonial) => (
  <div
    key={testimonial.id}
    className="flex flex-col md:flex-row items-start rounded-xl border"
  >
    {/* Left side image (1/4 width) */}
    <div className="md:basis-2/4 w-full h-[300px] md:h-[320px] overflow-hidden">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-full h-full object-cover object-top rounded-xl"
      />
    </div>

    {/* Right side content (3/4 width) */}
    <div className="md:basis-3/4 flex-1 py-8 px-6">
      {/* Stars */}
      <div className="flex mb-6">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="none"
            className="w-5 h-5 text-yellow-400"
          >
            <path d="M12 .587l3.668 7.431L24 9.75l-6 5.854 1.416 8.246L12 19.77 4.584 23.85 6 15.604 0 9.75l8.332-1.732L12 .587z" />
          </svg>
        ))}
      </div>

      {/* Testimonial text */}
      <p className="text-gray-700 mb-2 text-[0.99rem]">{`"${testimonial.text}"`}</p>

      {/* Name */}
      <p className="font-semibold text-normal text-primary-blue">
        {testimonial.name}
      </p>
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default Testimonials;
