import { IBlogData } from "@/types";
import Image from "next/image";
import adminImg from "@/assets/images/shathi-paul.jpg";
import { PiCrownSimpleFill } from "react-icons/pi";

const BlogDetails = ({ blog }: { blog: IBlogData }) => {
  return (
    <div>
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
              <span>{blog?.date}</span> {"."} <span>{blog?.time}</span>
            </div>
          </div>
        </div>
        {/* <SocialIcon /> */}
      </div>
      {/* Title and Image */}
      <div>
        <h2 className="capitalize italic text-[30px] md:text-[40px] baskervville-font mb-6">
          {blog?.title}
        </h2>
        <p className="mb-4 md:text-base font-semibold">{blog?.shortDes}</p>
        <div className="w-full h-full overflow-hidden">
          {" "}
          <Image
            className="w-full h-full object-cover"
            src={blog?.image ?? ""}
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
      {/* Paragraph */}
      <p className="text-base md:text-lg"> {blog.description}</p>
    </div>
  );
};

export default BlogDetails;
