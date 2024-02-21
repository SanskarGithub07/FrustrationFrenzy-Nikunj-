"use client";
import React, { useState } from "react";
import Image from "next/image";
import cart from "../../public/cart.jpg";

const AddToCartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleClick = () => {
    alert(quantity + " Item added to cart");
  };

  return (
    <div className="flex p-12 bg-white-green h-screen">
      <div className="w-1/2 pr-8">
        <Image src={cart} alt="Product" className="rounded-md w-full h-full" />
      </div>
      <div className="w-1/2">
        <h2 className="text-6xl text-black font-bold font-dancing mb-4">
          Sweet Serenity Bliss Candle
        </h2>
        <p className="text-dark-green font-normal mb-4 text-3xl font-crimson">
          Experience the perfect blend of sweetness and serenity with our Sweet
          Serenity Bliss Candle. Immerse yourself in the delightful notes of
          vanilla and chamomile, creating an atmosphere of pure tranquility.
          Hand-poured with care using eco-friendly soy wax, this candle promises
          a clean, prolonged burn. Elevate your space with the harmonious fusion
          of sweetness and serenity.
          <br />
          <br />
          <strong className="text-sec-red text-3xl font-crimson">
            Available For Just Rs.800
          </strong>
        </p>
        <div className="mb-4">
          <label
            htmlFor="sizeDropdown"
            className="block text-xl font-medium text-dark-green font-crimson"
          >
            Select Size:
          </label>
          <select
            id="sizeDropdown"
            name="size"
            className="mt-1 p-2 border rounded-md w-full text-black font-crimson text-lg"
          >
            <option className="text-black" value="small">
              Small
            </option>
            <option className="text-black" value="medium">
              Medium
            </option>
            <option className="text-black" value="large">
              Large
            </option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="quantityLabel"
            className="block text-xl font-crimson font-medium text-dark-green"
          >
            Quantity:
          </label>
          <div className="flex items-center">
            <button
              onClick={decreaseQuantity}
              className="p-2 bg-dark-green rounded-l-md"
            >
              -
            </button>
            <input
              type="text"
              id="quantityLabel"
              name="quantity"
              value={quantity}
              readOnly
              className="flex-1 p-2 border-t border-b border-black text-black"
            />
            <button
              onClick={increaseQuantity}
              className="p-2 bg-dark-green rounded-r-md"
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="bg-sec-red text-white p-2 rounded-lg w-1/6 font-crimson text-2xl"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCartPage;
