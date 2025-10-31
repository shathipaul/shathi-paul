import { getDataById } from "@/services/GetServices";

import Image from "next/image";
import adminImg from "@/assets/images/shathi-paul.jpg";
import { PiCrownSimpleFill } from "react-icons/pi";

const BlogDetailPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  // const { blogId } = await params;
  // const blog = await getDataById("todos", blogId);

  return (
    <div className="pt-10 md:pt-28 ">
      <div className="max-w-[960px] m-auto border border-lightGray py-8 lg:py-16 px-4 md:px-20 my-10 md:my-20">
        {/* Admin part */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-[50px]">
              <Image src={adminImg} alt="" />
            </div>
            <div className="md:flex items-center gap-1">
              <div className="flex items-center gap-2">
                <span>Admin</span>
                <PiCrownSimpleFill />
              </div>
              <div>
                <span>21 Mar 2025</span> {"."} <span>2 mins read</span>
              </div>
            </div>
          </div>
          {/* <SocialIcon /> */}
        </div>
        {/* Title and Image */}
        <div className="flex flex-col gap-4 mb-6">
          <h2 className="capitalize italic text-4xl">Performance Is Profit</h2>
          <h3 className="md:text-xl font-semibold">
            How Website Speed Directly Impacts Revenue for Modern Businesses
          </h3>
          {/* <div className="w-full h-full overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={"https://i.ibb.co.com/q3G4FBgG/blog-one.webp"}
              width={500}
              height={500}
              alt=""
            />
          </div> */}
        </div>
        {/* Paragraph */}
        <div className="flex flex-col gap-4">
          <p className="">
            When most people think about website performance, they think about
            “speed” as a technical detail. Something nice to have, but not
            mission-critical.
          </p>
          <p>But here’s the uncomfortable truth:</p>
          <h4>In most industries today, speed is revenue.</h4>
          <p>Your website performance influences:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Conversions</li>
            <li>Customer acquisition cost</li>
            <li>User trust</li>
            <li>Google rankings</li>
            <li>And ultimately… profit</li>
          </ul>
          <p>
            In a digital world where attention spans are shrinking, performance
            can become a competitive advantage — or a silent revenue leak.
          </p>
          <p>Let’s break down why.</p>
          <hr />
          <h4>Why Website Speed Matters More Than Ever</h4>
          <p>
            Modern users expect instant responses. We’re talking sub-second
            experiences.
          </p>
          <p>Every additional second of load time increases:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Bounce rate</li>
            <li>Drop-offs during checkout</li>
            <li>Abandoned forms</li>
            <li>Frustration with your brand</li>
          </ul>
          <p>
            It doesn’t matter how beautiful your website is if potential
            customers don’t stick around to see it.
          </p>
          <hr />
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
