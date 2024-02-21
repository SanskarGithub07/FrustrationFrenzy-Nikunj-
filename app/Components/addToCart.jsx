"use client";
import React, { useState } from "react";
import Image from "next/image";
import bamboo from "../../public/bamboo.jpg";

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
        <Image
          src={bamboo}
          alt="Product"
          width={200}
          height={200}
          className="rounded-md w-full h-full"
        />
      </div>
      <div className="w-1/2">
        <h2 className="text-5xl text-black font-bold font-dancing mb-4">
          TriadCascade Bamboo Fountain | Without Basebowl
        </h2>
        <p className="text-dark-green font-normal mb-4 text-md font-crimson">
          Experience the serenity of our Bamboo Water Fountain, meticulously
          handcrafted from sustainably sourced bamboo. Its timeless design,
          inspired by Zen aesthetics, seamlessly integrates into any space,
          serving as both a striking decor piece and a meditation tool. Beyond
          its aesthetic appeal, this fountain offers a myriad of health
          benefits, acting as an air purifier by releasing negative ions to
          cleanse the atmosphere and as a humidity balancer, providing moisture
          to dry environments, beneficial for skin and overall well-being. Let
          the gentle trickle of water lull you into relaxation, promoting better
          sleep and enhancing your daily living experience with its natural
          beauty and functionality.
          <br />
          <br />
          <strong className="text-sec-red text-xl font-crimson">
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
          className="bg-sec-red text-white p-2 rounded-lg w-1/6 font-crimson text-xl"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCartPage;
