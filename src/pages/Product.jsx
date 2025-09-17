import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { BadgeCheck, Banknote, RotateCcw } from "lucide-react";
import { products } from "../assets/assets";

const Product = () => {
  const { productId } = useParams();
  // const { products, currency, addToCart, cartItems } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item.product_code === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-28 transition-opacity ease-in duration-500 opacity-100 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* single Product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full scrollbar-hide">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer hover:border hover:border-gray-500 rounded-md"
                alt="product-image"
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto rounded-md" alt="" />
          </div>
        </div>
        {/* Product information */}
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{productData.price}</p>
          <p className="mt-5 text-gray-600 md:w-4/5 font-light">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.size.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border rounded-sm py-2 px-4 bg-gray-100 ${
                    item === size ? "border-gray-700" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Color</p>
            <div className="flex gap-2">
              {productData.color.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setColor(item)}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center
          ${color === item ? "border-gray-700" : "border-gray-300"}`}
                  style={{ backgroundColor: item }}
                >
                  {/* Optional inner ring when selected */}
                  {/* {color === item && (
                    <span className="w-3 h-3 bg-white rounded-full"></span>
                  )} */}
                </button>
              ))}
            </div>
          </div>
          <button
            // onClick={() => addToCart(productData._id, size)}
            className="bg-primary-blue text-white px-8 py-3 text-sm active:bg-gray-700 hover:bg-gold"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-700 mt-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-gray-800" />
              <p>100% Original product.</p>
            </div>
            <div className="flex items-center gap-2">
              <Banknote className="w-5 h-5 text-gray-800" />
              <p>Cash on delivery is available on this product.</p>
            </div>

            <div className="flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-gray-800" />
              <p>Easy return and exchange policy witin 7 days.</p>
            </div>
          </div>
        </div>
      </div>
      {/* bottom Description & review section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          {productData ? <p>{productData?.description}</p>: <p>Not Available</p>}
         
          <p></p>
        </div>
      </div>
      {/* Display related products */}

      {/* <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      /> */}
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
