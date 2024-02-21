"use client"
import React from 'react'
import ReactPlayer from "react-player";



const  Videobrief = (props)=> {
  return (
    <div className="w-1/4 h-1/3 flex flex-col gap-4 place-content-center ">
      <div className="">
        <div className="  w-full h-full">
          <ReactPlayer
            url={props.url}
            loop="true"
            playing="true"
            controls={false}
            muted="true"
            wrapper="true"
          />
        </div>
      </div>
      <div className="text-black w-full text-center p-4">kunal</div>
      <div className="text-black w-full flex justify-center">
        <button className="btn btn-primary bg-sec-red text-white-green ">
          Explore
        </button>
      </div>
    </div>
  );
}
export default {Videobrief};
