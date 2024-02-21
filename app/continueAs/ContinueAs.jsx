"use client";
import Link from "next/link";
import React from "react";
import VideoLeft from "../Components/VideoLeft";
import homeVideo from "../../public/home_video.mp4";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ContinueAs = () => {
   const ref = useRef(null);

   useEffect(() => {
     const tl = gsap.timeline({
       repeat: -1,
       defaults: { duration: 15, ease: "linear" },
     });

     tl.fromTo(ref.current, { x: "100%" }, { x: "-100%" });
   }, []);
  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="w-full h-full absolute ">
          <VideoLeft url={homeVideo} />
        </div>
        <div className="w-full h-1/8 flex bg-dark-green flex-row p-4 gap-8 absolute top-0 place-content-center overflow-hidden">
          <div className="flex flex-row gap-16" ref={ref}>
            <div className="text-4xl "> FRUSTRATION FRENZY </div>
            <div className="text-3xl font-dancing">
              `&quot;`Adopt the pace of nature: her secret is patience.`&quot;`
              - Ralph Waldo Emerson
            </div>
          </div>
        </div>
        <div className="flex flex-col  absolute left-0 right-0  gap-10 items-center bg-dark-green/40 w-2/5 m-auto  p-20 mt-40 h-96 z-50 border-solid rounded-3xl drop-shadow-xl backdrop-blur-sm backdrop-filter ">
          <h1 className="font-bold text-5xl  text-white font-serif">
            CONTINUE AS..
          </h1>
          <Link href="/mainpage">
            <button className="btn btn-primary bg-[#618264]/10 w-60 text-2xl text-white hover:bg-white hover:drop-shadow-xl border-2 border-white hover:border-white hover:text-black ">
              CLIENT
            </button>
          </Link>
          <Link href="/DoctorForm">
            <button className="btn btn-primary bg-[#618264]/10 w-60 text-2xl text-white hover:bg-white hover:drop-shadow-xl border-2 border-white hover:border-white hover:text-black">
              DOCTOR
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContinueAs;
