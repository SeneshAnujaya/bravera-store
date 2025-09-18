// import React, { useEffect, useState } from "react";
// import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
import { products } from "../assets/assets";

const BestSelling = () => {
  // const { products } = useContext(ShopContext);
  // const [latestProducts, setLatestProducts] = useState([]);

  // useEffect(() => {
  //   setLatestProducts(products.slice(0, 10));
  // }, [products]);

  return (
    <div className="my-10 ">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLING"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          A new chapter in style begins with confidence and elegance.
        </p>
      </div>

      {/* render products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {products.map((item, index) => (
          <ProductItem
            key={index}
            id={item.product_code}
            image={item.image}
            name={item.name}
            price={item.price}
            color={item.color}
          />
        ))}

      </div>
    </div>
  );
};

export default BestSelling;
