"use client";
import { FaAnglesDown } from "react-icons/fa6";

const BannerBottom = () => {
  return (
    <div className="absolute z-40 bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
      <p className="text-sm lg:text-lg mb-2">Lets build together</p>
      <button
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
        aria-label="Scroll down"
      >
        <FaAnglesDown className="animate-bounce hover:text-gold duration-500 text-2xl" />
      </button>
    </div>
  );
};

export default BannerBottom;
