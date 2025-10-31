"use client";
import React from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useSwiper } from "swiper/react";

const ProjectNavigation = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-end items-center gap-2">
      <button
        onClick={() => swiper.slidePrev()}
        className="border border-primary rounded-full w-10 md:w-12 h-10 md:h-12 flex items-center justify-center text-xl relative z-50 cursor-pointer hover:bg-primary hover:text-secondary duration-1000"
      >
        <MdKeyboardDoubleArrowLeft />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="border border-primary rounded-full w-10 md:w-12 h-10 md:h-12 flex items-center justify-center text-xl relative z-50 cursor-pointer hover:bg-primary hover:text-secondary duration-1000"
      >
        <MdKeyboardDoubleArrowLeft className="rotate-180" />
      </button>
    </div>
  );
};

export default ProjectNavigation;
