import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { products } from "../assets/assets";

const Collection = () => {
  // const {products, search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");
  const [brand, setBrand] = useState([]);
  const [otherCategory, setOtherCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleBrand = (e) => {
    if (brand.includes(e.target.value)) {
      setBrand((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setBrand((prev) => [...prev, e.target.value]);
    }
  };

  // othert
    const toggleOtherCategory = (e) => {
    if (otherCategory.includes(e.target.value)) {
      setOtherCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setOtherCategory((prev) => [...prev, e.target.value]);
    }
  };

  

  const applyFilter = () => {
    let productsCopy = products.slice();

    // if(showSearch && search) {
    //   productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    // }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    if (brand.length > 0) {
      productsCopy = productsCopy.filter((item) => brand.includes(item.brand));
    }

    if (otherCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => otherCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products, brand, otherCategory]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-11 border-t mt-[3.5rem]">
      {/* FILTER OPTION */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt=""
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""} `}
          />
        </p>
        {/* CATEGROY FILTER */}
        <div
          className={`border border-gray-400 rounded-md pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3.5 accent-black"
                value={"Men"}
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3.5 accent-black"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3.5 accent-black"
                value={"Kids"}
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        {/* Subcategory Filter */}
        <div
          className={`border border-gray-400 rounded-md pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3.5 accent-black"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3.5 accent-black"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3.5 accent-black"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div
          className={`border border-gray-400 rounded-md pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">BRAND</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {Array.from(new Set(products.map((item) => item.brand))).map(
              (brand, index) => (
                <p key={index} className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-3.5 accent-black"
                    value={brand}
                    onChange={toggleBrand}
                  />
                  {brand}
                </p>
              )
            )}
          </div>
        </div>

        {/* Subcategory Filter */}
        <div
          className={`border border-gray-400 rounded-md pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">SUB CATEGORY</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {Array.from(new Set(products.map((item) => item.subCategory))).map(
              (subCategory, index) => (
                <p key={index} className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-3.5 accent-black"
                    value={subCategory}
                    onChange={toggleOtherCategory}
                  />
                  {subCategory}
                </p>
              )
            )}
          </div>
        </div>


      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"FULL"} text2={"COLLECTIONS"} />
          {/* product sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-500 text-sm px-2 rounded-md"
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item.product_code}
              price={item.price}
              image={item.image}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Collection;
