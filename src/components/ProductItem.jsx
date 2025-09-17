import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price, color }) => {
  // const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden rounded-md hover:border hover:border-slate-300">
        <img
          className="hover:scale-110 transition ease-in-out rounded-md"
          src={image[0]}
          alt="product"
        />
      </div>
      <p className="pt-3 pb-1 text-[0.95rem]">{name}</p>
      <p className="text-sm font-medium text-gray-900">{price}</p>
      <div className="flex gap-2 mt-1.5">
        {color?.map((item, index) => (
          <button
            key={index}
            // onClick={() => setColor(item)}
            className={`w-4 h-4 shadow-[0_0_1px_1px_#ddd] border-2 border-white rounded-full  flex items-center justify-center
          ${color === item ? "border-gray-900" : "border-gray-300"}`}
            style={{ backgroundColor: item }}
          >
            {/* Optional inner ring when selected */}
            {/* {color === item && (
                    <span className="w-3 h-3 bg-white rounded-full"></span>
                  )} */}
          </button>
        ))}
      </div>
    </Link>
  );
};

export default ProductItem;
