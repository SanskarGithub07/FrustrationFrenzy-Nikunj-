import React from "react";
import Image from "next/image";
import p1 from "../../public/cart.jpg";
import Link from "next/link";
import Foooter from "../Components/Foooter";

const data = Array.from({ length: 7 }); // You can replace this with your actual data

export default function Page() {
  return (
    <>
      <div className="w-full bg-white-green">
        <div className="w-full bg-white-green drop-shadow-xl mb-8">
          <h1 className="text-center text-black text-6xl font-dancing py-4">
            PRODUCTS...
          </h1>
        </div>
        <div className="flex flex-row flex-wrap gap-32 place-content-center w-full">
          {data.map((_, index) => (
            <div
              key={index}
              className="w-1/3 h-1/3 flex flex-col gap-4 place-content-center"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full drop-shadow-2xl object-cover">
                  <div className="w-full flex place-content-center">
                    <Image src={p1} height={350} />
                  </div>
                </div>
                {/* <div className="text-white text-xl font-extrabold absolute font-dancing">
                  WELCOME DOSTO...
                </div> */}
              </div>
              <div className="text-black w-full text-center p-2">
                <h2 className="text-2xl font-bold font-dancing mb-2">
                  Sweet Serenity Bliss Candle
                </h2>
                <p className="text-dark-green font-normal mb-2 text-md font-crimson">
                  Experience the perfect blend of sweetness and serenity with
                  our Sweet Serenity Bliss Candle. Immerse yourself in the
                  delightful notes of vanilla and chamomile, creating an
                  atmosphere of pure tranquility. Hand-poured with care using
                  eco-friendly soy wax, this candle promises a clean, prolonged
                  burn. Elevate your space with the harmonious fusion of
                  sweetness and serenity.
                  <br />
                  <br />
                  <strong className="text-sec-red text-md font-crimson">
                    Available For Just Rs.800
                  </strong>
                </p>
              </div>
              <Link href="/cart">
                <div className="text-black w-full flex justify-center">
                  <button className="p-2 w-1/2 bg-sec-red text-white-green hover:bg-black hover:text-white hover:ease-in">
                    Add To Cart
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <Foooter />
        </div>
      </div>
    </>
  );
}
