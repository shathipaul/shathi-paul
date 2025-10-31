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
    <div className="xl:w-3/4 mx-auto space-y-12">
      {blogData?.map((data, index) => (
        <article
          key={index}
          className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden relative z-30 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]"
        >
          {/* Image side */}
          <Link
            href={`/blog/${data.blogId}`}
            className="w-full h-full object-cover"
          >
            <Image
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={data.image}
              alt={data.title}
              width={1200}
              height={800}
              loading="lazy"
            />
          </Link>

          {/* Content side */}
          <div className="p-6 lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={adminImg}
                  alt="Admin"
                  width={44}
                  height={44}
                  className="rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <span>Admin</span>
                    <PiCrownSimpleFill />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <span>{data.date}</span>
                    <span className="mx-1">•</span>
                    <span>{data.time}</span>
                  </div>
                </div>
              </div>

              <Link href={`/blog/${data.blogId}`}>
                <h2 className="mb-3 text-2xl leading-snug font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-gold">
                  {data.title}
                </h2>
              </Link>

              <h3 className="mb-4 text-lg">{data.shortDes}</h3>
              <p>
                When most people think about website performance, they think
                about “speed” as a technical detail. Something nice to have, but
                not mission-critical....
              </p>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between border-t pt-3 text-sm px-4">
                <button
                  aria-label={`like-${data.blogId}`}
                  onClick={() => toggleLike(data.blogId)}
                  className={`p-2 rounded-full transition-transform duration-200 ${
                    likedArticles.includes(data.blogId)
                      ? "bg-red-100 text-red-600 scale-110"
                      : " text-primary hover:scale-105"
                  }`}
                >
                  {likedArticles.includes(data.blogId) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
                <Link
                  href={`/blog/${data.blogId}`}
                  className="inline-flex items-end text-sm text-primary font-medium animate-pulse animate-infinite duration-700"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogCard;
