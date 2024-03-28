import React from "react";

export default function Loader() {
return (
  <div className="loader w-screen h-screen bg-black z-[28] flex items-center justify-center">
    <video src="https://i.imgur.com/86MsBC7.mp4" autoPlay loop muted={false} className="w-full h-full object-contain"></video>
  </div>
)
}