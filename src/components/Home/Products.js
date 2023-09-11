import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "../product/ProductCard";
import img from "../../assets/Rectangle 41899.png";
function Popular() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 0,
      name: "Drinks",
    },
    {
      id: 1,
      name: "Sandos",
    },
    {
      id: 2,
      name: "Soft serve",
    },
    {
      id: 3,
      name: "Healthy sweets",
    },
  ];
  const products = [
    {
      id: 0,
      name: "Milk tea boba",
      category: "Drinks",
      price: 25,
      image: img,
    },
    {
      id: 1,
      name: "Matcha latte",
      category: "Drinks",
      price: 26,
      image: img,
    },
    {
      id: 2,
      name: "Matcha boba",
      category: "Drinks",
      price: 29,
      image: img,
    },
    {
      id: 3,
      name: "Taro latte",
      category: "Drinks",
      price: 25,
      image: img,
    },
    {
      id: 4,
      name: "Taro boba",
      category: "Drinks",
      price: 29,
      image: img,
    },
    {
      id: 5,
      name: "Matcha frap creme brule",
      category: "Drinks",
      price: 29,
      image: img,
    },
    {
      id: 6,
      name: "Coconut frap",
      category: "Drinks",
      price: 25,
      image: img,
    },
    {
      id: 7,
      name: "Coconut latte",
      category: "Drinks",
      price: 23,
      image: img,
    },
    {
      id: 8,
      name: "iced black",
      category: "Drinks",
      price: 14,
      image: img,
    },
    {
      id: 9,
      name: "Caffe latte",
      category: "Drinks",
      price: 20,
      image: img,
    },
    {
      id: 10,
      name: "Mango iced tea",
      category: "Drinks",
      price: 24,
      image: img,
    },
    {
      id: 11,
      name: "Peach iced tea",
      category: "Drinks",
      price: 24,
      image: img,
    },
    {
      id: 12,
      name: "Touch of heaven",
      category: "Drinks",
      price: 29,
      image: img,
    },
    {
      id: 13,
      name: "Black",
      category: "Drinks",
      price: 14,
      image: img,
    },
    {
      id: 14,
      name: "Cappuccino",
      category: "Drinks",
      price: 19,
      image: img,
    },
    {
      id: 15,
      name: "Latte",
      category: "Drinks",
      price: 19,
      image: img,
    },
    {
      id: 16,
      name: "Tori katsu sando",
      category: "Sandos",
      price: 42,
      image: img,
    },
    {
      id: 17,
      name: "tuna sando",
      category: "Sandos",
      price: 42,
      image: img,
    },
    {
      id: 18,
      name: "tamago sando",
      category: "Sandos",
      price: 42,
      image: img,
    },
    {
      id: 19,
      name: "beef sando",
      category: "Sandos",
      price: 42,
      image: img,
    },
    {
      id: 20,
      name: "Matcha",
      category: "Soft serve",
      price: 25,
      image: img,
    },
    {
      id: 21,
      name: "Ube",
      category: "Soft serve",
      price: 25,
      image: img,
    },
    {
      id: 22,
      name: "French vanilla",
      category: "Soft serve",
      price: 25,
      image: img,
    },
    {
      id: 23,
      name: "Choclate",
      category: "Soft serve",
      price: 25,
      image: img,
    },
    {
      id: 24,
      name: "Mango",
      category: "Soft serve",
      price: 25,
      image: img,
    },
    {
      id: 25,
      name: "Milk tea",
      category: "Soft serve",
      price: 25,
      image: img,
    },
    {
      id: 26,
      name: "Vegan matcha donuts",
      category: "Healthy sweets",
      price: 12,
      image: img,
    },
    {
      id: 27,
      name: "Vegan japanese soflle",
      category: "Healthy sweets",
      price: 32,
      image: img,
    },
    {
      id: 28,
      name: "Vegan taiyaki waffle",
      category: "Healthy sweets",
      price: 28,
      image: img,
    },
    {
      id: 29,
      name: "Mochi",
      category: "Healthy sweets",
      price: 32,
      image: img,
    },
    {
      id: 30,
      name: "mitarashi dango",
      category: "Healthy sweets",
      price: 32,
      image: img,
    },
  ];
  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : [];
  return (
    <div className="px-6  py-6  ">
      <div className=" font- px-10 space-y-5 py-3">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            200: {
              slidesPerView: 1,
            },
            350: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
          }}
        >
          {categories.map((category) => {
            return (
              <SwiperSlide>
                <button
                  onClick={() => handleCategorySelect(category.name)}
                  className="flex items-center justify-center w-full h-24  overflow-hidden focus-within:bg-[#3450a1] hover:bg-[#3450a1] focus-within:text-white  rounded-lg cursor-pointer text-[#3450a1]  hover:text-white border-2 border-[#3450a1] transition duration-500 ease-in-out  "
                >
                  <h1 className="text-sm  text-center cursor-pointer sm:text-base md:text-lg font-semibold pb-1  ">
                    {category.name}
                  </h1>
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="grid gap-6 grid-col-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center py-10 ">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Popular;
