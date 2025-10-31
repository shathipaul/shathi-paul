"use client";
import { IBlogData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import adminImg from "@/assets/images/shathi-paul.jpg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { PiCrownSimpleFill } from "react-icons/pi";

const BlogCard = ({ blogData }: { blogData: IBlogData[] }) => {
  const [likedArticles, setLikedArticles] = useState<number[]>([]);

  const toggleLike = (articleId: number) => {
    setLikedArticles((prevLiked) =>
      prevLiked.includes(articleId)
        ? prevLiked.filter((id) => id !== articleId)
        : [...prevLiked, articleId]
    );
  };
  return (
    <div>
      {blogData?.map((data, index) => (
        <div
          key={index}
          className="md:flex gap-4 my-10 md:mx-10 bg-secondary shadow-md relative z-30"
        >
          {/* Card Image */}
          <Link
            href={`/blog/${data.blogId}`}
            className="w-full h-full md:w-[400px] md:h-[250px] lg:w-[640px] lg:h-[450px] object-cover"
          >
            <Image
              className="w-full h-full object-cover"
              src={data.image}
              alt="image"
              width={500}
              height={500}
              loading="lazy"
            />
          </Link>
          {/* Card Text */}
          <div className="p-4 relative">
            <div className="flex justify-between items-center mb-4 lg:mb-6">
              <div className="flex items-center gap-2">
                <div className="w-[50px] r">
                  <Image className="rounded-full" src={adminImg} alt="" />
                </div>
                <div className="">
                  <div className="flex items-center gap-2">
                    <span>Admin</span>
                    <PiCrownSimpleFill />
                  </div>
                  <div className="text-sm">
                    <span>{data.date}</span> {"."} <span>{data.time}</span>
                  </div>
                </div>
              </div>
              <div>{/* <SocialIcon /> */}</div>
            </div>
            <Link href={`/articles/${data.blogId}`}>
              <h2 className="capitalize italic text-[24px] mb-4">
                {data.title}
              </h2>
              <p className="mb-4">{data.shortDes}...</p>
            </Link>
            <div className="lg:absolute bottom-4 w-[90%] m-auto">
              <div className="flex justify-between items-center border-t border-semiGray ">
                <div className="flex gap-4 mt-2">
                  <p>0 vue</p>
                  <p>0 comments</p>
                </div>
                <div className="flex justify-end text-lg text-red-700 mt-2">
                  <button onClick={() => toggleLike(data.blogId)}>
                    {likedArticles.includes(data.blogId) ? (
                      <FaHeart />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
