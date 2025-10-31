import CommonTitle from "@/components/common/CommonTitle";
import OpacityAnimation from "@/components/common/OpacityAnimation";
import BlogCard from "@/components/modules/blog/Cards/BlogCard";
import { getAllData } from "@/services/GetServices";

const BlogPage = async () => {
  const blogData = await getAllData("blog.json");

  return (
    <OpacityAnimation>
      <div className="pt-10 md:pt-28">
        <CommonTitle text="My Blogs" />
        <BlogCard blogData={blogData} />
      </div>
    </OpacityAnimation>
  );
};

export default BlogPage;
