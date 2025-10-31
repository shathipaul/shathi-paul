import { z } from "zod";
import { IBlogs } from "./blogs.interface";

const blogsZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title needed",
    }),
    image: z.string({
      required_error: "Image needed",
    }),
    shortDes: z.string({
      required_error: "Short Description needed",
    }),
    description: z.string({
      required_error: "Description needed",
    }),
  }),
});

export const BlogsValidation = {
  blogsZodSchema,
};
