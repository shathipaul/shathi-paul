"use client";
import Image, { StaticImageData } from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface CardProps {
  index: number;
  title: string;
  image: StaticImageData;
  revealed: boolean[];
  setRevealed: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const Card = ({ index, title, image, revealed, setRevealed }: CardProps) => {
  const ref = useRef(null);
  // const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const isInView = useInView(ref, { margin: "0px 0px -10px 0px" });

  useEffect(() => {
    if (isInView) {
      setRevealed((prev) => {
        const newState = [...prev];
        newState[index] = true;
        return newState;
      });
    }
  }, [isInView, index, setRevealed]);

  const side =
    index % 2 === 0
      ? "right-0 flex-col md:flex-row items-start md:items-center"
      : "left-0 text-end flex-col items-end md:items-center md:flex-row-reverse justify-start";
  const connectorSide =
    index % 2 === 0 ? "right-1/2 translate-x-1/2" : "left-1/2 -translate-x-1/2";
  return (
    <div className="relative z-40 w-full lg:w-[860px] h-28 md:h-38 flex items-center justify-center">
      {/* Connector line */}
      <div
        className={`absolute top-0 h-full w-1 bg-primary ${connectorSide}`}
      />

      {/* Dot on center line */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
             w-4 h-4 rounded-full bg-primary z-50 flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: revealed[index] ? 1 : 0,
          opacity: revealed[index] ? 1 : 0,
        }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {/* Outer ring with transparent gap */}
        <span className="absolute w-8 h-8 rounded-full" />
      </motion.div>

      {/* Card */}
      <motion.div
        ref={ref}
        className={`absolute ${side} w-2/5 lg:w-[350px] p-2 md:p-4 bg-secondary shadow-lg rounded-lg flex items-center gap-2 md:gap-10`}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: revealed[index] ? 1 : 0,
          y: revealed[index] ? 0 : 50,
        }}
        transition={{ duration: 0.6 }}
      >
        <Image src={image} alt="" className="w-6 h-6 md:w-20 md:h-20" />
        <span className="text-sm md:text-xl">{title}</span>
      </motion.div>
    </div>
  );
};

export default Card;
