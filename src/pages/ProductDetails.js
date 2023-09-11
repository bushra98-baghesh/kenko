// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Spinner from "../components/skeletons/Spinner";
// import { RiArrowLeftSFill } from "react-icons/ri";
// import StarRatings from "react-star-ratings";
// import { useDispatch } from "react-redux";
// import {
//   useGetProductDetailsQuery,
//   useGetProductIngredientsQuery,
// } from "../redux/slices/productsApi";
// import { useThemeHook } from "../components/ThemeProvider";
// import { setAddItemToCart } from "../redux/slices/cartSlice";
// import { useLang } from "../components/LangProvider";
// function ProductDetails() {
//   const navigate = useNavigate();
//   const [theme] = useThemeHook();
//   const { lan } = useLang();
//   const { id } = useParams();
//   const { data: productDetails, isLoading: isLoadingProduct } =
//     useGetProductDetailsQuery(id);
//   const { data: productIngredients } = useGetProductIngredientsQuery(id);
//   const Ingredients = productIngredients?.data;
//   const product = productDetails?.data;
//   const [selectedIngredients, setSelectedIngredients] = useState([]);
//   const [itemNote, setItemNote] = useState("");
//   const handleIngredientChange = (ingredient) => {
//     const { id: ingredientId } = ingredient;
//     console.log(product);
//     const isExist = selectedIngredients.find((item) => item.id == ingredientId);

//     if (isExist) {
//       setSelectedIngredients(
//         selectedIngredients.filter((item) => item.id !== ingredientId)
//       );
//     } else {
//       setSelectedIngredients([...selectedIngredients, ingredient]);
//     }
//   };
//   const dispatch = useDispatch();
//   const AddToCart = () => {
//     let newPrice = 0;
//     for (let index = 0; index < selectedIngredients.length; index++) {
//       newPrice += selectedIngredients[index].price_by_piece;
//     }

//     dispatch(
//       setAddItemToCart({
//         ...product,
//         price: newPrice + product.price,
//         extraIngredients: selectedIngredients,
//         note: itemNote,
//       })
//     );
//     setSelectedIngredients([]);
//   };
//   const rate = product?.rating ? product?.rating : Math.random() * 5;
//   const ingredient =
//     lan === "en"
//       ? product?.ingredient
//         ? product?.ingredient.slice(0, 30) + "..."
//         : "No Data..."
//       : product?.ingredient_trans
//       ? product?.ingredient_trans.slice(0, 30) + "..."
//       : "لا يوجد معلومات...";
//   const name =
//     lan === "en"
//       ? product?.name
//         ? product?.name
//         : "No Data..."
//       : product?.name_trans
//       ? product?.name_trans
//       : "لا يوجد معلومات...";
//   return (
//     <div
//       className={`${
//         theme ? "bg-[#171717]" : " bg-white"
//       } mx-auto max-w-3xl  min-h-screen `}
//     >
//       {isLoadingProduct ? (
//         <Spinner />
//       ) : (
//         <>
//           <div className=" relative  w-full">
//             <button
//               onClick={() => navigate(-1)}
//               className="bg-white z-20  absolute left-0 mx-5 my-6 p-2 border-2 border-[#d3cfcf] shadow-lg rounded-lg"
//             >
//               <RiArrowLeftSFill size={25} />
//             </button>

//             <img
//               src={product?.image}
//               alt="img"
//               className=" w-full h-80 hover:h-96 opacity-90 bg-black duration-300 transition-all ease-in-out shadow-lg  object-cover object-center"
//             />
//           </div>
//           <div
//             className={`${
//               theme ? "bg-[#171717]" : " bg-white "
//             } shadow-[0px_-16px_15px_-6px_rgba(0,0,0,0.44)] rounded-t-3xl -mt-4 relative z-40   `}
//           >
//             <div className="py-4 px-10 flex flex-col sm:flex-row items-center justify-between text-start ">
//               <h1
//                 className={`${
//                   theme ? "text-[#e3e3e3]" : "text-[#323232]"
//                 } font-bold md:text-2xl sm:text-xl text-lg tracking-wider   mb-2`}
//               >
//                 {name}
//               </h1>
//               <h1 className="font-bold text-lg  text-[#DC0D28]">
//                 {product?.price} USD
//               </h1>
//             </div>
//             <div className="flex-col px-4  items-center justify-center  ">
//               <StarRatings
//                 rating={rate}
//                 numberOfStars={5}
//                 starDimension="30px"
//                 starSpacing="1px"
//                 starRatedColor="#FFC700"
//               />
//               <div className="py-6 space-y-2">
//                 <p
//                   className={`${
//                     theme ? "text-[#e3e3e3]" : "text-[#323232]"
//                   } font-semibold`}
//                 >
//                   {ingredient}
//                 </p>
//               </div>
//             </div>

//             <div className="text-start space-y-4 px-4 py-4">
//               <h1 className="font-semibold text-base sm:text-lg md:text-xl text-[#959393] ">
//                 {lan === "en" ? "Extra Ingredients" : "مكونات اضافية"}
//               </h1>

//               {Ingredients &&
//                 Ingredients.map((ingredient) => {
//                   const isChecked = selectedIngredients.some(
//                     (item) => item.id === ingredient.id
//                   );
//                   const name =
//                     lan === "en"
//                       ? ingredient?.name
//                         ? ingredient?.name
//                         : "No Data..."
//                       : ingredient?.name_trans
//                       ? ingredient?.name_trans
//                       : "لا يوجد معلومات...";
//                   return (
//                     <button
//                       key={ingredient.id}
//                       className={`${
//                         isChecked
//                           ? "border-2 border-[#DC0D28] text-[#DC0D28]"
//                           : "border-2 border-[#959393] text-[#959393]"
//                       } p-6 mx-2 rounded-md transition-colors duration-300 ease-in-out`}
//                       onClick={() => handleIngredientChange(ingredient)}
//                     >
//                       {name}
//                     </button>
//                   );
//                 })}
//             </div>
//             <div className="text-start px-4 py-4">
//               <h1 className="font-semibold text-base sm:text-lg md:text-xl text-[#959393] ">
//                 {lan === "en" ? "Add note" : "أضف ملاحظاتك "}
//               </h1>
//               <div className="py-4 mx-2">
//                 <input
//                   value={itemNote}
//                   placeholder="....."
//                   type="text"
//                   id="large-input"
//                   className="flex w-full p-6 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md "
//                   onChange={(e) => {
//                     setItemNote(e.target.value);
//                   }}
//                 />
//               </div>
//             </div>
//             <div className=" w-full  mt-10 text-clip  shadow-inner  max-w-4xl items-center justify-between border-t-2 rounded-lg flex  gap-4 space-y-2 sm:space-y-0  px-6 mx-auto py-6 ">
//               <button
//                 onClick={AddToCart}
//                 className="bg-black rounded-lg px-1 py-2 w-full text-white font-medium text-base"
//               >
//                 {lan === "en" ? "Add Order" : "أضافة"}
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default ProductDetails;
