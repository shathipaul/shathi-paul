"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import DynamicNavigation from "./DynamicNavigation";

interface DynamicSwiperProps {
  children: ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  loop?: boolean;
  speed?: number;
  breakpoints?: {
    [width: number]: import("swiper/types").SwiperOptions;
  };
  title: string;
  autoplay?: boolean;
}

const DynamicSwiper = ({
  children,
  slidesPerView = 1,
  spaceBetween = 20,
  loop = false,
  speed = 1500,
  breakpoints,
  title,
  autoplay = false,
}: DynamicSwiperProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // 👀 Track visibility of section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Start when 30% of Swiper is visible
      }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // 🎬 Control autoplay start/stop based on visibility
  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper || !autoplay) return;

    if (isVisible) {
      swiper.autoplay.start();
    } else {
      swiper.autoplay.stop();
    }
  }, [isVisible, autoplay]);

  return (
    <div ref={containerRef} className="relative z-40 w-full">
      <Swiper
        ref={swiperRef}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={loop}
        speed={speed}
        breakpoints={breakpoints}
        className="swiper"
        modules={[Autoplay]}
        autoplay={
          autoplay
            ? {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                stopOnLastSlide: false,
              }
            : false
        }
      >
        {/* Swiper Header */}
        <div className="absolute top-0 w-full z-10 md:px-14">
          {/* grid: left placeholder, center title, right nav */}
          <div className="grid grid-cols-[1fr_auto] items-center">
            <h3 className="w-full text-3xl md:text-4xl lg:text-5xl text-center tracking-wider justify-self-center">
              {title}
            </h3>
            <div className="justify-self-end">
              <DynamicNavigation />
            </div>
          </div>
        </div>

        {/* Slides */}
        {children.map((child, i) => (
          <SwiperSlide key={i} className="mt-[120px] md:mt-[120px]">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DynamicSwiper;
