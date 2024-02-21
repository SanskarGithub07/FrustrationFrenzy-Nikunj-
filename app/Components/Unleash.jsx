import React from "react";
import bridge from "../../public/bridge.jpg";
import Image from "next/image";
import serenity from "../../public/serenity.jpg";

const Unleash = () => {
  return (
    <div className="relative w-screen h-screen mt-8 overflow-hidden">
      <Image
        src={bridge}
        alt="Background Image"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-center text-white w-4/5 mx-auto backdrop-filter backdrop-blur-md bg-opacity-50 p-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white  font-bold font-crimson p-4 backdrop-filter backdrop-blur-md bg-opacity-70">
            FIND SERENITY IN THE CHAOS
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row justify-between">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
            <Image src={serenity} alt="Serenity" className="w-full h-full" />
          </div>

          <div className="w-full sm:w-1/2 text-white">
            <p className="text-left text-3xl p-4 font-dancing">
              Welcome to a space where chaos is not the enemy—its your canvas
              for tranquility. Embrace the noise, release tension, and discover
              a serene oasis in the storm. Our immersive experiences turn chaos
              into a therapeutic journey, offering a unique path to mental
              rejuvenation. For those seeking balance in the midst of life
              noise, where chaos becomes your ally, and serenity is found in the
              release.
            </p>
            <div>
              <p className="text-xl text-center mt-4 mb-4 font-crimson">
                Join Our Sanctuary of Calm!
              </p>
            </div>
            <button className="bg-opacity-70 border border-white text-white font-crimson px-6 p-2 mt-4 text-xl rounded-md hover:bg-white hover:text-black ease-in duration-300">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unleash;
