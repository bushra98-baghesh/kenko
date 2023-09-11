import React from "react";

function ProductCard({ product }) {
  return (
    <div class="w-60 mx-auto flex flex-col items-center justify-center  bg-white shadow-md rounded-xl duration-500 hover:scale-110 hover:shadow-xl">
      <img
        src={product.image}
        alt="Product"
        class=" w-60 h-52 object-cover rounded-t-md shadow-md shadow-black/60"
      />
      <div class="px-4 py-3 text-center">
        <p class="text-lg font-bold text-black truncate block ">
          {product.name}
        </p>

        <p class="text-lg font-semibold text-red-700 my-3">{product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
